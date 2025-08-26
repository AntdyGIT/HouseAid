function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
  }
  function toggleSidebar() {
    document.querySelector(".sidebar").classList.toggle("collapsed");
  }
  
  
  function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    alert("You searched for: " + input);
  }
  
