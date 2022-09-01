function addingEventListener() {
    const btn = document.getElementById("button");
    function clickAlert(){
        alert('I was clicked!');
    }
    btn.addEventListener('click', clickAlert);

}
