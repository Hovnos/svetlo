import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isCollapsed = true;
  

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleSubmenu(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach((submenu: Element) => {
      // Correct type assertion here
      const htmlSubmenu = submenu as HTMLElement;
      if (htmlSubmenu !== clickedElement.nextElementSibling) {
        htmlSubmenu.style.display = 'none'; // Close all submenus except the one being clicked
      }
    });

    // Toggle the clicked submenu if it is the next element sibling
    if (clickedElement.nextElementSibling && clickedElement.nextElementSibling.classList.contains('submenu')) {
      const submenu = clickedElement.nextElementSibling as HTMLElement;
      submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';     

    }
  }
  handleMouseLeave(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const submenu = target.querySelector('.submenu') as HTMLElement;
    if (submenu) {
      submenu.style.display = 'none'; // Hide submenu on mouse leave
    }
  }

}


