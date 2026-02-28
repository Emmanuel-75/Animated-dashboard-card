const spinner = document.getElementById('spinner');
const icon = document.getElementById('icon');
const statusText = document.getElementById('statusText');
const completeIcon = document.getElementById('complete');

setTimeout(()=>{
    spinner.classList.add('opacity-0');
    icon.classList.remove('opacity-0');
    statusText.textContent = 'Download Complete';
    completeIcon.classList.remove('opacity-0')
    statusText.classList.remove('text-gray-500');
    statusText.classList.add('text-green-600', 'animate-bounce');
    completeIcon.classList.add('animate-bounce')
},3000)