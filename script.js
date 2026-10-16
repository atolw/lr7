function magicBall()
{
  const container = document.createElement('div');
  
  const inputField = document.createElement('input');
  inputField.className="inputField";
  inputField.type="text";
  inputField.id="name";
  inputField.name="name";
  inputField.placeholder="ask me anything";
  container.appendChild(inputField);
  
    const ball = document.createElement('div');
    ball.className = "ball";
    

    let button = document.createElement('button');
    button.className = "button";
    button.textContent = "Click me";
    ball.onclick = function( ) {          
  const arrayAnswers = Array("yes", "no", "maybe", "perchance");
  let choice = Math.random() * 4;
  alert(arrayAnswers[Math.floor(choice)])
  inputField.value='';
};
    ball.appendChild(button)
    container.appendChild(ball);
    document.body.appendChild(container);
}



magicBall()
