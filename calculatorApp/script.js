@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6E06F2;
}

.calculator{
    border: 1px solid #717377;
    padding: 20px;
    border-radius: 16px;
    background: linear-gradient(45deg, #0a0a0a, #3a4452);
    box-shadow: 10px 3px 15px rgba(251, 252, 252, 0.5);

}

input{
    width: 320px;
    border: none;
    padding: 24px;
    margin: 10px;
    background: transparent;
    box-shadow: 0px 3px 15px rgbs(84, 84, 84, 0.1);
    font-size: 40px;
    text-align: right;
    cursor: pointer;
    color:  #5BE8B8;
}

input::placeholder{
    color:  #5BE8B8;
}

button{
    border: none;
    width: 60px;
    height: 60px;
    margin: 10px;
    border-radius: 50%;
    background: transparent;
    color:  #5BE8B8;
    font-size: 20px;
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

.equalBtn{
    background-color: #5BE8B8;
    color: white;
}
.operator{
    background-color: #6E06F2;
}
