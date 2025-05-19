import './bootstrap';
import '../css/app.css';    // pulls Tailwind/SCSS/etc. into the bundle

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();
