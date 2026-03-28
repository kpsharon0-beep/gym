function sendWhatsApp(){
  let name=document.getElementById("name").value;
  let phone=document.getElementById("phone").value;

  let msg=`Hello, I want to join Legend Ladies Fitness.
Name: ${name}
Phone: ${phone}`;

  let url="https://wa.me/919999999999?text="+encodeURIComponent(msg);
  window.open(url,"_blank");
}
