// main.js - inject members and simple interactions
const members = [
  {nick:"Diego",role:"owner",desc:"Лидер — вернулся 05.12.2025"},
  {nick:"zazzo",role:"co",desc:"Co-Owner — трудящийся для клана"},
  {nick:"vacanto",role:"elder",desc:"Elder — ваканто"},
  {nick:"vacanto",role:"elder",desc:"Elder — ваканто"},
  {nick:"vacanto",role:"member",desc:"Member — ваканто"},
];

// add 10 placeholder members
for(let i=1;i<=10;i++){
  members.push({nick:"member"+i,role:"member",desc:`Member ${i}`})
}

function avatarSVG(name, w=64, h=64){
  const initials = name.slice(0,2).toUpperCase();
  const bg = '#111';
  return `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><rect rx='10' width='100%' height='100%' fill='${bg}'/><text x='50%' y='52%' font-family='Inter, Arial' font-size='22' fill='white' text-anchor='middle' dominant-baseline='middle'>${initials}</text></svg>`)}`;
}

function createCard(m){
  const div = document.createElement('div');
  div.className = 'member-card';
  div.innerHTML = `
    <div style="display:flex;align-items:center">
      <img class="avatar" src="${avatarSVG(m.nick,56,56)}" alt="${m.nick}" />
      <div class="meta">
        <div class="name">${m.nick}</div>
        <div class="role ${roleClass(m.role)} grad-text">${roleLabel(m.role)}</div>
      </div>
    </div>
    <p style="margin-top:10px;color:var(--muted);font-size:13px">${m.desc||''}</p>
  `;
  return div;
}

function roleClass(role){
  if(role==='owner') return 'role-owner';
  if(role==='co') return 'role-co';
  if(role==='elder') return 'role-elder';
  return 'role-member';
}
function roleLabel(role){
  if(role==='owner') return 'Owner';
  if(role==='co') return 'Co-Owner';
  if(role==='elder') return 'Elder';
  return 'Member';
}

// populate preview cards
document.addEventListener('DOMContentLoaded', ()=>{
  const cards = document.querySelectorAll('.cards');
  if(cards.length){
    const preview = cards[0];
    // show top 4
    members.slice(0,4).forEach(m=> preview.appendChild(createCard(m)));
  }

  // members page grid
  const grid = document.querySelector('.members-grid');
  if(grid){
    members.forEach(m=>{
      const el = document.createElement('div');
      el.className = 'member-full';
      el.innerHTML = `
        <img class="avatar" src="${avatarSVG(m.nick,64,64)}" alt="${m.nick}" style="width:64px;height:64px;border-radius:12px"/>
        <div style="flex:1">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div style="font-weight:700">${m.nick}</div>
            <div class="badge ${m.role==='owner'?'owner':m.role==='co'?'co':m.role==='elder'?'elder':'member'}">${roleLabel(m.role)}</div>
          </div>
          <div style="color:var(--muted);margin-top:6px;font-size:13px">${m.desc||''}</div>
        </div>
      `;
      grid.appendChild(el);
    });
  }
});
