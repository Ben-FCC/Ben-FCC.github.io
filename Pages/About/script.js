// JavaScript for Tab Switching
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
  
        // Add active class to the clicked tab and its content
        tab.classList.add('active');
        document.querySelector(`#${tab.id.replace('-tab', '')}`).classList.add('active');
      });
    });
  });