

import { type JSX } from "solid-js";


export default function DashboardHeader (): JSX.Element {



return (
<header class="w-100 p-3 mb-3 border-bottom nav align-items-center justify-content-between">

  <form class="me-3" role="search">
      <input type="search" class="form-control" placeholder="Search..." aria-label="Search" />
  </form>

  <div class="d-flex align-items-center">

    <label class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="theme" />
    </label>
      
    <div class="flex-shrink-0 dropdown">
      <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
      </a>
      <ul class="dropdown-menu text-small shadow" data-popper-placement="bottom-end" style="position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate3d(0px, 34px, 0px);">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>

  </div>


</header>);
}