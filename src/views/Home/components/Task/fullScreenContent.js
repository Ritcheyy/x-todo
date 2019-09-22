//Setup
let fsmActual = document.createElement('div');
fsmActual.setAttribute('id', 'fsm_actual');
document.body.appendChild(fsmActual);
let $fsm = document.querySelectorAll('.fsm');
let $fsmActual = document.querySelector('#fsm_actual');
$fsmActual.style.position = "absolute";

let position = {};
let size = {};


//modal action stuffs
let openFSM = function(event) {
        let $this = event.currentTarget.parentElement;
        position = $this.getBoundingClientRect();
        size = {
                width: window.getComputedStyle($this).width,
                height: window.getComputedStyle($this).height
        }
        
        $fsmActual.style.position = "absolute";
        $fsmActual.style.top = position.top + 'px';
        $fsmActual.style.left = position.left + 'px';
        $fsmActual.style.height = size.height;
        $fsmActual.style.width = size.width;
        $fsmActual.style.margin = $this.style.margin;
        
        setTimeout(function(){
                $fsmActual.innerHTML = $this.innerHTML;
                let classes = $this.classList.value.split(' ');
                for (let i = 0; i < classes.length; i++) {
                        $fsmActual.classList.add(classes[i]);
                }
                $fsmActual.classList.add('growing');
                $fsmActual.style.height = '100vh';
                $fsmActual.style.width = '100vw';
                $fsmActual.style.top = '0';
                $fsmActual.style.left = '0';
                $fsmActual.style.margin = '0';
        }, 1);
        
        setTimeout(function(){
                $fsmActual.classList.remove('growing');
                $fsmActual.classList.add('full-screen');
                document.body.classList.add("no-scroll");
        }, 300);
};

let closeFSM = function(event){
        let $this = event.currentTarget;
        
        $this.style.height = size.height;
        $this.style.width = size.width;
        $this.style.top = position.top + 'px';
        $this.style.left = position.left + 'px';
        $this.style.margin = '0';
        $this.classList.remove('full-screen');
        document.body.classList.remove("no-scroll");
        $this.classList.add('shrinking');
        
        setTimeout(function(){
                while($this.firstChild) $this.removeChild($this.firstChild);
                let classList = $this.classList;
                while (classList.length > 0) {
                        classList.remove(classList.item(0));
                }
                $this.style = '';
        }, 1000);
};
/*
for (let i = 0; i < $fsm.length; i++) {
        $fsm[i].addEventListener("click", openFSM);
}
$fsmActual.addEventListener("click", closeFSM);*/

export { openFSM, closeFSM }

