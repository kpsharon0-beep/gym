function sendWhatsApp(){
  let name=document.getElementById("name").value;
  let phone=document.getElementById("phone").value;

  let msg=`Hello, I want to join Legend Ladies Fitness.
Name: ${name}
Phone: ${phone}`;

  let url="https://wa.me/918129638606?text="+encodeURIComponent(msg);
  window.open(url,"_blank");
}
