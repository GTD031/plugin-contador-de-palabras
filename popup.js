document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("contar-palabras-btn");
  btn.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	const url =tabs[0].url;
      if (url && url.startsWith("https://creacionempresamadrid.com/")) {
	  chrome.scripting.executeScript(
        {
          target: {tabId: tabs[0].id},
          files: ["content.js"],    
        },
		() => {
			chrome.scripting.executeScript(
			{
				target: {tabId: tabs[0].id},
				func: ()=> {
					Inicio();
				},
			},
			() => {
			  console.log("El script ha sido cargado");
			});
		});
	  }else{
		alert("Este plugin solo funciona en https://creacionempresamadrid.com/");
		};
    });
  });
});
