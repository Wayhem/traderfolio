document.addEventListener("DOMContentLoaded", function(event) { 
    document.querySelector('#sidebarCollapse').addEventListener('click', function(){
        document.querySelector('#sidebar').classList.toggle('active');
    });
});