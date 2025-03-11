import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './side-layout.component.html',
  styleUrl: './side-layout.component.css',
})
export class SideLayoutComponent {
  menuItems = [
    {
      label: 'Home',
      iconUrl: 'assets/icons/navigation/home.svg',
      activeIconUrl: 'assets/icons/navigation/home-active.svg',
      route: '/home',
      isActive: false,
    },
    {
      label: 'Lessons',
      iconUrl: 'assets/icons/navigation/lessons.svg',
      activeIconUrl: 'assets/icons/navigation/lessons-active.svg',
      route: '/lessons',
      isActive: false,
    },
    {
      label: 'Schedule',
      iconUrl: 'assets/icons/navigation/schedule.svg',
      activeIconUrl: 'assets/icons/navigation/schedule-active.svg',
      route: '/schedule',
      isActive: false,
    },
    {
      label: 'Inbox',
      iconUrl: 'assets/icons/navigation/inbox.svg',
      activeIconUrl: 'assets/icons/navigation/inbox-active.svg',
      route: '/inbox',
      isActive: false,
    },
    {
      label: 'Shop',
      iconUrl: 'assets/icons/navigation/shop.svg',
      activeIconUrl: 'assets/icons/navigation/shop-active.svg',
      route: '/shop',
      isActive: false,
    },
    {
      label: 'Profile',
      iconUrl: 'assets/icons/navigation/profile.svg',
      activeIconUrl: 'assets/icons/navigation/profile-active.svg',
      route: '/profile',

      isActive: false,
    },
    {
      label: 'Logout',
      iconUrl: 'assets/icons/navigation/signOut.svg',
      activeIconUrl: 'assets/icons/navigation/signOut-active.svg',
      route: '/logout',
      isActive: false,
    },
  ];

  navigateTo(route: string) {
    this.menuItems.forEach((item) => (item.isActive = false));

    const selectedItem = this.menuItems.find((item) => item.route === route);
    if (selectedItem) {
      selectedItem.isActive = true;
    }
  }
}
