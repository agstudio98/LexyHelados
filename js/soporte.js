const SYSTEM_PROMPT = `Sos el asistente virtual de LexyHelados, una heladeria artesanal y pasteleria premium fundada por Lexi Heredia en 2017 en Cordoba Capital, Argentina.

La marca se concentra en 3 sucursales:
- Alto Alberdi: abierto lunes a domingo de 12:00 a 22:00 hs
- Avenida Colon: abierto lunes a domingo de 11:00 a 23:00 hs  
- General Paz: abierto martes a domingo de 12:00 a 22:30 hs

Productos principales: helados artesanales, postres de autor, tartas frias, mousses, crepes, milkshakes y bebidas artesanales.

Medios de pago: Mastercard, Naranja X y Mercado Pago. Tambien efectivo.

Hacen pedidos por encargo para eventos, cumpleanos, casamientos y reuniones corporativas. Consultar con al menos 48 hs de anticipacion.

No tienen delivery propio actualmente, pero trabajan con plataformas externas en algunas zonas.

Tienen opciones para personas con restricciones alimentarias: sin TACC, veganas y sin azucar, aunque varían según la temporada.

Respondé siempre en español rioplatense (vos, ustedes), con tono cálido, elegante y conciso. No uses emojis. No inventes informacion que no te fue dada. Si no sabes algo, decile al usuario que se comunique directamente con la sucursal.`;

const messages = [];
const chatEl = document.getElementById('chatMessages');
const inputEl = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
}

function addMessage(role, text) {
  const wrap = document.createElement('div');
  wrap.className = `msg ${role}`;
  const isBot = role === 'bot';
  wrap.innerHTML = `
    ${isBot ? `<div class="msg-avatar">L</div>` : ''}
    <div>
      <div class="msg-bubble">${text}</div>
      <div class="msg-time">${getTime()}</div>
    </div>
    ${!isBot ? `<div class="msg-avatar" style="background:linear-gradient(135deg,#a8d4e6,#5fa8c8)">V</div>` : ''}
  `;
  chatEl.appendChild(wrap);
  chatEl.scrollTop = chatEl.scrollHeight;
}

function showTyping() {
  const el = document.createElement('div');
  el.id = 'typingIndicator';
  el.className = 'typing-indicator';
  el.innerHTML = `<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>`;
  chatEl.appendChild(el);
  chatEl.scrollTop = chatEl.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

async function sendMessage(userText) {
  if (!userText.trim()) return;
  sendBtn.disabled = true;
  inputEl.value = '';
  inputEl.style.height = 'auto';

  messages.push({ role: 'user', content: userText });
  addMessage('user', userText);
  showTyping();

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'x-api-key': 'your-api-key-here'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20240620',
        max_tokens: 1000,
        system: SYSTEM_PROMPT,
        messages: messages
      })
    });

    const data = await res.json();
    removeTyping();

    const reply = data.content?.[0]?.text || 'Lo siento, no pude procesar tu consulta en este momento. Te recomiendo contactarnos directamente en alguna de nuestras sucursales.';
    messages.push({ role: 'assistant', content: reply });
    addMessage('bot', reply);

  } catch (err) {
    removeTyping();
    const fallback = 'En este momento no puedo procesar tu consulta. Por favor comunicate directamente con nosotros en cualquiera de nuestras sucursales de Alto Alberdi, Av. Colon o Gral Paz.';
    messages.push({ role: 'assistant', content: fallback });
    addMessage('bot', fallback);
  }

  sendBtn.disabled = false;
  inputEl.focus();
}

// Initial greeting
setTimeout(() => {
  addMessage('bot', 'Hola, bienvenida a LexyHelados. Soy tu asistente virtual y estoy aca para ayudarte con cualquier consulta sobre nuestros productos, sucursales, horarios o pedidos especiales. En que puedo ayudarte hoy?');
}, 400);

// Event listeners
sendBtn.addEventListener('click', () => sendMessage(inputEl.value));
inputEl.addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) { 
    e.preventDefault(); 
    sendMessage(inputEl.value); 
  }
});

// Auto-resize textarea
inputEl.addEventListener('input', () => {
  inputEl.style.height = 'auto';
  inputEl.style.height = Math.min(inputEl.scrollHeight, 120) + 'px';
});

// Quick buttons
document.querySelectorAll('.quick-btn').forEach(btn => {
  btn.addEventListener('click', () => sendMessage(btn.dataset.msg));
});

// Clear chat
document.getElementById('clearBtn').addEventListener('click', () => {
  messages.length = 0;
  chatEl.innerHTML = '';
  setTimeout(() => {
    addMessage('bot', 'Chat reiniciado. En que puedo ayudarte?');
  }, 200);
});