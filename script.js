/*=============================
      Scroll Animation
=============================*/

.hidden{

opacity:0;

transform:translateY(40px);

transition:.8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

/*=============================
          Toast
=============================*/

.toast{

position:fixed;

left:50%;

bottom:35px;

transform:translateX(-50%) translateY(30px);

background:#00ff88;

color:#000;

padding:14px 26px;

border-radius:50px;

font-weight:700;

opacity:0;

transition:.3s;

z-index:9999;

box-shadow:0 15px 40px rgba(0,255,136,.35);

}

.toast.show{

opacity:1;

transform:translateX(-50%) translateY(0);

                     }
