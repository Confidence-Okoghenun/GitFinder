class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }

  theme(clicks) {
    let head = document.querySelector("head");
    if (clicks % 2 !== 0) {
      head.innerHTML += `<style class="darkreader darkreader--user-agent" media="screen">html {
        background-color: #1d1d22 !important;
    }
    html, body, input, textarea, select, button {
        background-color: #1d1d22;
    }
    html, body, input, textarea, select, button {
        border-color: #4e4d4b;
        color: #bdb8ad;
    }
    a {
        color: #3959b9;
    }
    table {
        border-color: #464543;
    }
    ::placeholder {
        color: #9f9381;
    }
    ::selection {
        background-color: #155096;
        color: #cbc8c3;
    }
    ::-moz-selection {
        background-color: #155096;
        color: #cbc8c3;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        background-color: #4b4f12 !important;
        color: #bdb8ad !important;
    }
    ::-webkit-scrollbar {
        background-color: #202025;
        color: #a69c8c;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #292b30;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #2e3138;
    }
    ::-webkit-scrollbar-thumb:active {
        background-color: #363a41;
    }
    ::-webkit-scrollbar-corner {
        background-color: #1d1d22;
    }</style><style class="darkreader darkreader--fallback" media="screen"></style><style class="darkreader darkreader--text" media="screen"></style><style class="darkreader darkreader--invert" media="screen"></style><style class="darkreader darkreader--inline" media="screen">[data-darkreader-inline-bgcolor] {
      background-color: var(--darkreader-inline-bgcolor) !important;
    }
    [data-darkreader-inline-bgimage] {
      background-image: var(--darkreader-inline-bgimage) !important;
    }
    [data-darkreader-inline-border] {
      border-color: var(--darkreader-inline-border) !important;
    }
    [data-darkreader-inline-border-bottom] {
      border-bottom-color: var(--darkreader-inline-border-bottom) !important;
    }
    [data-darkreader-inline-border-left] {
      border-left-color: var(--darkreader-inline-border-left) !important;
    }
    [data-darkreader-inline-border-right] {
      border-right-color: var(--darkreader-inline-border-right) !important;
    }
    [data-darkreader-inline-border-top] {
      border-top-color: var(--darkreader-inline-border-top) !important;
    }
    [data-darkreader-inline-boxshadow] {
      box-shadow: var(--darkreader-inline-boxshadow) !important;
    }
    [data-darkreader-inline-color] {
      color: var(--darkreader-inline-color) !important;
    }
    [data-darkreader-inline-fill] {
      fill: var(--darkreader-inline-fill) !important;
    }
    [data-darkreader-inline-stroke] {
      stroke: var(--darkreader-inline-stroke) !important;
    }
    [data-darkreader-inline-outline] {
      outline-color: var(--darkreader-inline-outline) !important;
    }</style>
      <style class="darkreader darkreader--cors" media="screen" data-uri="https://bootswatch.com/4/litera/bootstrap.min.css">/*!
     * Bootswatch v4.1.1
     * Homepage: https://bootswatch.com
     * Copyright 2012-2018 Thomas Park
     * Licensed under MIT
     * Based on Bootstrap
    *//*!
     * Bootstrap v4.1.1 (https://getbootstrap.com/)
     * Copyright 2011-2018 The Bootstrap Authors
     * Copyright 2011-2018 Twitter, Inc.
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     *//* latin-ext */
    
    /* latin */
    
    /* latin-ext */
    
    
    html {
        -webkit-tap-highlight-color: transparent;
    }
    body {
        color: #aea798;
        background-color: #1d1d22;
    }
    [tabindex="-1"]:focus {
        outline-color: initial !important;
    }
    abbr[title], abbr[data-original-title] {
        text-decoration-color: initial;
        border-bottom-color: initial;
    }
    a {
        color: #4d71af;
        text-decoration-color: initial;
        background-color: transparent;
    }
    a:hover {
        color: #5778b1;
        text-decoration-color: initial;
    }
    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration-color: initial;
    }
    a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
        color: inherit;
        text-decoration-color: initial;
    }
    a:not([href]):not([tabindex]):focus {
        outline-color: initial;
    }
    caption {
        color: #9d917f;
    }
    button:focus {
        outline-color: #a27316;
    }
    fieldset {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    legend {
        color: inherit;
    }
    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        color: inherit;
    }
    hr {
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
        border-top-color: rgba(89, 88, 86, 0.1);
    }
    mark, .mark {
        background-color: #393314;
    }
    .blockquote-footer {
        color: #9d917f;
    }
    .img-thumbnail {
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .figure-caption {
        color: #9d917f;
    }
    code {
        color: #b24e78;
    }
    a > code {
        color: inherit;
    }
    kbd {
        color: #cbc8c3;
        background-color: #25252b;
    }
    pre {
        color: #b4ada0;
    }
    pre code {
        color: inherit;
    }
    .table {
        background-color: transparent;
    }
    .table th, .table td {
        border-top-color: rgba(89, 88, 86, 0.1);
    }
    .table thead th {
        border-bottom-color: rgba(89, 88, 86, 0.1);
    }
    .table tbody + tbody {
        border-top-color: rgba(89, 88, 86, 0.1);
    }
    .table .table {
        background-color: #1d1d22;
    }
    .table-bordered {
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .table-bordered th, .table-bordered td {
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .table-borderless th, .table-borderless td, .table-borderless thead th, .table-borderless tbody + tbody {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .table-striped tbody tr:nth-of-type(2n+1) {
        background-color: rgba(13, 13, 13, 0.05);
    }
    .table-hover tbody tr:hover {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table-primary, .table-primary > th, .table-primary > td {
        background-color: #15243f;
    }
    .table-hover .table-primary:hover {
        background-color: #162748;
    }
    .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th {
        background-color: #162748;
    }
    .table-secondary, .table-secondary > th, .table-secondary > td {
        background-color: #222227;
    }
    .table-hover .table-secondary:hover {
        background-color: #25252a;
    }
    .table-hover .table-secondary:hover > td, .table-hover .table-secondary:hover > th {
        background-color: #25252a;
    }
    .table-success, .table-success > th, .table-success > td {
        background-color: #204133;
    }
    .table-hover .table-success:hover {
        background-color: #224738;
    }
    .table-hover .table-success:hover > td, .table-hover .table-success:hover > th {
        background-color: #224738;
    }
    .table-info, .table-info > th, .table-info > td {
        background-color: #203a3d;
    }
    .table-hover .table-info:hover {
        background-color: #223f42;
    }
    .table-hover .table-info:hover > td, .table-hover .table-info:hover > th {
        background-color: #223f42;
    }
    .table-warning, .table-warning > th, .table-warning > td {
        background-color: #432f14;
    }
    .table-hover .table-warning:hover {
        background-color: #4c3615;
    }
    .table-hover .table-warning:hover > td, .table-hover .table-warning:hover > th {
        background-color: #4c3615;
    }
    .table-danger, .table-danger > th, .table-danger > td {
        background-color: #3b1a18;
    }
    .table-hover .table-danger:hover {
        background-color: #421c1a;
    }
    .table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th {
        background-color: #421c1a;
    }
    .table-light, .table-light > th, .table-light > td {
        background-color: #1a1a25;
    }
    .table-hover .table-light:hover {
        background-color: #1c1c29;
    }
    .table-hover .table-light:hover > td, .table-hover .table-light:hover > th {
        background-color: #1c1c29;
    }
    .table-dark, .table-dark > th, .table-dark > td {
        background-color: #282a2f;
    }
    .table-hover .table-dark:hover {
        background-color: #2b2d33;
    }
    .table-hover .table-dark:hover > td, .table-hover .table-dark:hover > th {
        background-color: #2b2d33;
    }
    .table-active, .table-active > th, .table-active > td {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table-hover .table-active:hover {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table-hover .table-active:hover > td, .table-hover .table-active:hover > th {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table .thead-dark th {
        color: #cbc8c3;
        background-color: #25252b;
        border-top-color: #4d5256;
        border-right-color: #4d5256;
        border-bottom-color: #4d5256;
        border-left-color: #4d5256;
    }
    .table .thead-light th {
        color: #a9a090;
        background-color: #222227;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .table-dark {
        color: #cbc8c3;
        background-color: #25252b;
    }
    .table-dark th, .table-dark td, .table-dark thead th {
        border-top-color: #4d5256;
        border-right-color: #4d5256;
        border-bottom-color: #4d5256;
        border-left-color: #4d5256;
    }
    .table-dark.table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .table-dark.table-striped tbody tr:nth-of-type(2n+1) {
        background-color: rgba(29, 29, 34, 0.05);
    }
    .table-dark.table-hover tbody tr:hover {
        background-color: rgba(29, 29, 34, 0.07);
    }
    @media (max-width: 575.98px) {
    .table-responsive-sm > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    @media (max-width: 767.98px) {
    .table-responsive-md > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    @media (max-width: 991.98px) {
    .table-responsive-lg > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    @media (max-width: 1199.98px) {
    .table-responsive-xl > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    .table-responsive > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .form-control {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .form-control:focus {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
        outline-color: initial;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .form-control::-webkit-input-placeholder {
        color: #9d917f;
    }
    .form-control::placeholder {
        color: #9d917f;
    }
    .form-control:disabled, .form-control[readonly] {
        background-color: #222227;
    }
    .form-control-plaintext {
        color: #aea798;
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .form-check-input:disabled ~ .form-check-label {
        color: #9d917f;
    }
    .valid-feedback {
        color: #5ec298;
    }
    .valid-tooltip {
        color: #cbc8c3;
        background-color: rgba(26, 143, 97, 0.8);
    }
    .was-validated .form-control:valid, .form-control.is-valid, .was-validated .custom-select:valid, .custom-select.is-valid {
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
        box-shadow: rgba(26, 143, 97, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
        color: #5ec298;
    }
    .was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
        color: #5ec298;
    }
    .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
        background-color: #198258;
    }
    .was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
        background-color: #1c9a68;
    }
    .was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(26, 143, 97, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {
        border-top-color: inherit;
        border-right-color: inherit;
        border-bottom-color: inherit;
        border-left-color: inherit;
    }
    .was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
        box-shadow: rgba(26, 143, 97, 0.25) 0px 0px 0px 0.2rem;
    }
    .invalid-feedback {
        color: #ab5e58;
    }
    .invalid-tooltip {
        color: #cbc8c3;
        background-color: rgba(103, 38, 35, 0.8);
    }
    .was-validated .form-control:invalid, .form-control.is-invalid, .was-validated .custom-select:invalid, .custom-select.is-invalid {
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
        box-shadow: rgba(103, 38, 35, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
        color: #ab5e58;
    }
    .was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
        color: #ab5e58;
    }
    .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
        background-color: #421b19;
    }
    .was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
        background-color: #58221f;
    }
    .was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(103, 38, 35, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {
        border-top-color: inherit;
        border-right-color: inherit;
        border-bottom-color: inherit;
        border-left-color: inherit;
    }
    .was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
        box-shadow: rgba(103, 38, 35, 0.25) 0px 0px 0px 0.2rem;
    }
    .btn {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .btn:hover, .btn:focus {
        text-decoration-color: initial;
    }
    .btn:focus, .btn.focus {
        outline-color: initial;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {
        background-image: none;
    }
    .btn-primary {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-primary:hover {
        color: #cbc8c3;
        background-color: #1f427d;
        border-top-color: #204584;
        border-right-color: #204584;
        border-bottom-color: #204584;
        border-left-color: #204584;
    }
    .btn-primary:focus, .btn-primary.focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-primary.disabled, .btn-primary:disabled {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
        color: #cbc8c3;
        background-color: #204381;
        border-top-color: #204586;
        border-right-color: #204586;
        border-bottom-color: #204586;
        border-left-color: #204586;
    }
    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-secondary {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-secondary:hover {
        color: #b4ada0;
        background-color: #31343a;
        border-top-color: #3f4346;
        border-right-color: #3f4346;
        border-bottom-color: #3f4346;
        border-left-color: #3f4346;
    }
    .btn-secondary:focus, .btn-secondary.focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-secondary.disabled, .btn-secondary:disabled {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
        color: #b4ada0;
        background-color: #32363c;
        border-top-color: #404447;
        border-right-color: #404447;
        border-bottom-color: #404447;
        border-left-color: #404447;
    }
    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-success {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-success:hover {
        color: #cbc8c3;
        background-color: #18744f;
        border-top-color: #1dac73;
        border-right-color: #1dac73;
        border-bottom-color: #1dac73;
        border-left-color: #1dac73;
    }
    .btn-success:focus, .btn-success.focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-success.disabled, .btn-success:disabled {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {
        color: #cbc8c3;
        background-color: #166c4a;
        border-top-color: #1dae75;
        border-right-color: #1dae75;
        border-bottom-color: #1dae75;
        border-left-color: #1dae75;
    }
    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-info {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-info:hover {
        color: #cbc8c3;
        background-color: #236b75;
        border-top-color: #298490;
        border-right-color: #298490;
        border-bottom-color: #298490;
        border-left-color: #298490;
    }
    .btn-info:focus, .btn-info.focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-info.disabled, .btn-info:disabled {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
        color: #cbc8c3;
        background-color: #21646d;
        border-top-color: #298591;
        border-right-color: #298591;
        border-bottom-color: #298591;
        border-left-color: #298591;
    }
    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-warning {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-warning:hover {
        color: #b4ada0;
        background-color: #82581d;
        border-top-color: #8c5f1e;
        border-right-color: #8c5f1e;
        border-bottom-color: #8c5f1e;
        border-left-color: #8c5f1e;
    }
    .btn-warning:focus, .btn-warning.focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-warning.disabled, .btn-warning:disabled {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {
        color: #b4ada0;
        background-color: #875b1d;
        border-top-color: #8e611e;
        border-right-color: #8e611e;
        border-bottom-color: #8e611e;
        border-left-color: #8e611e;
    }
    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-danger {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-danger:hover {
        color: #cbc8c3;
        background-color: #712925;
        border-top-color: #782b27;
        border-right-color: #782b27;
        border-bottom-color: #782b27;
        border-left-color: #782b27;
    }
    .btn-danger:focus, .btn-danger.focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-danger.disabled, .btn-danger:disabled {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {
        color: #cbc8c3;
        background-color: #722926;
        border-top-color: #7a2c28;
        border-right-color: #7a2c28;
        border-bottom-color: #7a2c28;
        border-left-color: #7a2c28;
    }
    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-light {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-light:hover {
        color: #b4ada0;
        background-color: #232329;
        border-top-color: #343b40;
        border-right-color: #343b40;
        border-bottom-color: #343b40;
        border-left-color: #343b40;
    }
    .btn-light:focus, .btn-light.focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-light.disabled, .btn-light:disabled {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {
        color: #b4ada0;
        background-color: #25252a;
        border-top-color: #363b40;
        border-right-color: #363b40;
        border-bottom-color: #363b40;
        border-left-color: #363b40;
    }
    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-dark {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-dark:hover {
        color: #cbc8c3;
        background-color: #26272c;
        border-top-color: #50565a;
        border-right-color: #50565a;
        border-bottom-color: #50565a;
        border-left-color: #50565a;
    }
    .btn-dark:focus, .btn-dark.focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-dark.disabled, .btn-dark:disabled {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {
        color: #cbc8c3;
        background-color: #222227;
        border-top-color: #50565b;
        border-right-color: #50565b;
        border-bottom-color: #50565b;
        border-left-color: #50565b;
    }
    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-primary {
        color: #4d71af;
        background-color: transparent;
        background-image: none;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-outline-primary:hover {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-outline-primary:focus, .btn-outline-primary.focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-primary.disabled, .btn-outline-primary:disabled {
        color: #4d71af;
        background-color: transparent;
    }
    .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-secondary {
        color: #a09583;
        background-color: transparent;
        background-image: none;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-outline-secondary:hover {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-outline-secondary:focus, .btn-outline-secondary.focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
        color: #a09583;
        background-color: transparent;
    }
    .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-success {
        color: #5ec298;
        background-color: transparent;
        background-image: none;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-outline-success:hover {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-outline-success:focus, .btn-outline-success.focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-success.disabled, .btn-outline-success:disabled {
        color: #5ec298;
        background-color: transparent;
    }
    .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-info {
        color: #65abb3;
        background-color: transparent;
        background-image: none;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-outline-info:hover {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-outline-info:focus, .btn-outline-info.focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-info.disabled, .btn-outline-info:disabled {
        color: #65abb3;
        background-color: transparent;
    }
    .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-warning {
        color: #ba8d4b;
        background-color: transparent;
        background-image: none;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-outline-warning:hover {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-outline-warning:focus, .btn-outline-warning.focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-warning.disabled, .btn-outline-warning:disabled {
        color: #ba8d4b;
        background-color: transparent;
    }
    .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-danger {
        color: #ab5e58;
        background-color: transparent;
        background-image: none;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-outline-danger:hover {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-outline-danger:focus, .btn-outline-danger.focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-danger.disabled, .btn-outline-danger:disabled {
        color: #ab5e58;
        background-color: transparent;
    }
    .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-light {
        color: #c7c5be;
        background-color: transparent;
        background-image: none;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-outline-light:hover {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-outline-light:focus, .btn-outline-light.focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-light.disabled, .btn-outline-light:disabled {
        color: #c7c5be;
        background-color: transparent;
    }
    .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-dark {
        color: #aea798;
        background-color: transparent;
        background-image: none;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-outline-dark:hover {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-outline-dark:focus, .btn-outline-dark.focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-dark.disabled, .btn-outline-dark:disabled {
        color: #aea798;
        background-color: transparent;
    }
    .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-link {
        color: #4d71af;
        background-color: transparent;
    }
    .btn-link:hover {
        color: #5778b1;
        text-decoration-color: initial;
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .btn-link:focus, .btn-link.focus {
        text-decoration-color: initial;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        box-shadow: none;
    }
    .btn-link:disabled, .btn-link.disabled {
        color: #9d917f;
    }
    .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropdown-menu {
        color: #aea798;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.15);
        border-right-color: rgba(89, 88, 86, 0.15);
        border-bottom-color: rgba(89, 88, 86, 0.15);
        border-left-color: rgba(89, 88, 86, 0.15);
    }
    .dropup .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropright .dropdown-toggle::after {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
        border-left-color: initial;
    }
    .dropleft .dropdown-toggle::before {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
    }
    .dropdown-divider {
        border-top-color: #33383d;
    }
    .dropdown-item {
        color: #b4ada0;
        background-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .dropdown-item:hover, .dropdown-item:focus {
        color: #b7b1a4;
        text-decoration-color: initial;
        background-color: #1f1f23;
    }
    .dropdown-item.active, .dropdown-item:active {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #1d3b71;
    }
    .dropdown-item.disabled, .dropdown-item:disabled {
        color: #9d917f;
        background-color: transparent;
    }
    .dropdown-header {
        color: #9d917f;
    }
    .dropdown-item-text {
        color: #b4ada0;
    }
    .input-group-text {
        color: #a9a090;
        background-color: #222227;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-control-input:checked ~ .custom-control-label::before {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .custom-control-input:focus ~ .custom-control-label::before {
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-control-input:active ~ .custom-control-label::before {
        color: #cbc8c3;
        background-color: #131f35;
    }
    .custom-control-input:disabled ~ .custom-control-label {
        color: #9d917f;
    }
    .custom-control-input:disabled ~ .custom-control-label::before {
        background-color: #222227;
    }
    .custom-control-label::before {
        background-color: #242529;
    }
    .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
        background-color: #1d3b71;
    }
    .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
    }
    .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
        background-color: #1d3b71;
    }
    .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
    }
    .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
        background-color: rgba(29, 59, 113, 0.5);
    }
    .custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
        background-color: rgba(29, 59, 113, 0.5);
    }
    .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
        background-color: #1d3b71;
    }
    .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    }
    .custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
        background-color: rgba(29, 59, 113, 0.5);
    }
    .custom-select {
        color: #a9a090;
        background-image: url("blob:http://127.0.0.1:5500/07bb688d-d85f-44e3-a6f9-2fd642c40e16");
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-select:focus {
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
        outline-color: initial;
        box-shadow: rgba(13, 13, 13, 0.07) 0px 1px 2px inset, rgba(22, 39, 70, 0.5) 0px 0px 5px;
    }
    .custom-select[multiple], .custom-select[size]:not([size="1"]) {
        background-image: none;
    }
    .custom-select:disabled {
        color: #9d917f;
        background-color: #222227;
    }
    .custom-file-input:focus ~ .custom-file-label {
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-file-input:focus ~ .custom-file-label::after {
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
    }
    .custom-file-label {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-file-label::after {
        color: #a9a090;
        background-color: #222227;
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-range {
        background-color: transparent;
    }
    .custom-range:focus {
        outline-color: initial;
    }
    .custom-range::-webkit-slider-thumb {
        background-color: #1d3b71;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .custom-range::-webkit-slider-thumb:focus {
        outline-color: initial;
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-range::-webkit-slider-thumb:active {
        background-color: #131f35;
    }
    .custom-range::-webkit-slider-runnable-track {
        color: transparent;
        background-color: #242529;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .nav-link:hover, .nav-link:focus {
        text-decoration-color: initial;
    }
    .nav-link.disabled {
        color: #9d917f;
    }
    .nav-tabs {
        border-bottom-color: #383836;
    }
    .nav-tabs .nav-link {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
        border-top-color: #33383d;
        border-right-color: #33383d;
        border-bottom-color: #383836;
        border-left-color: #33383d;
    }
    .nav-tabs .nav-link.disabled {
        color: #9d917f;
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #333231;
        border-left-color: #383836;
    }
    .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .navbar-brand:hover, .navbar-brand:focus {
        text-decoration-color: initial;
    }
    .navbar-toggler {
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .navbar-toggler:hover, .navbar-toggler:focus {
        text-decoration-color: initial;
    }
    .navbar-toggler-icon {
        background-image: initial;
        background-color: initial;
    }
    .navbar-light .navbar-brand {
        color: #aea798;
    }
    .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
        color: #aea798;
    }
    .navbar-light .navbar-nav .nav-link {
        color: rgba(189, 184, 173, 0.5);
    }
    .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
        color: #aea798;
    }
    .navbar-light .navbar-nav .nav-link.disabled {
        color: rgba(189, 184, 173, 0.3);
    }
    .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
        color: #aea798;
    }
    .navbar-light .navbar-toggler {
        color: rgba(189, 184, 173, 0.5);
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .navbar-light .navbar-toggler-icon {
        background-image: url("blob:http://127.0.0.1:5500/01763885-db7c-4e6b-929f-55a550c097d6");
    }
    .navbar-light .navbar-text {
        color: rgba(189, 184, 173, 0.5);
    }
    .navbar-light .navbar-text a {
        color: #aea798;
    }
    .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
        color: #aea798;
    }
    .navbar-dark .navbar-brand {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(203, 200, 195, 0.6);
    }
    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-nav .nav-link.disabled {
        color: rgba(203, 200, 195, 0.25);
    }
    .navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-toggler {
        color: rgba(203, 200, 195, 0.6);
        border-top-color: rgba(51, 50, 49, 0.1);
        border-right-color: rgba(51, 50, 49, 0.1);
        border-bottom-color: rgba(51, 50, 49, 0.1);
        border-left-color: rgba(51, 50, 49, 0.1);
    }
    .navbar-dark .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.6)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }
    .navbar-dark .navbar-text {
        color: rgba(203, 200, 195, 0.6);
    }
    .navbar-dark .navbar-text a {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
        color: #cbc8c3;
    }
    .card {
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.13);
        border-right-color: rgba(89, 88, 86, 0.13);
        border-bottom-color: rgba(89, 88, 86, 0.13);
        border-left-color: rgba(89, 88, 86, 0.13);
    }
    .card-link:hover {
        text-decoration-color: initial;
    }
    .card-header {
        background-color: rgba(13, 13, 13, 0.03);
        border-bottom-color: rgba(89, 88, 86, 0.13);
    }
    .card-header + .list-group .list-group-item:first-child {
        border-top-color: initial;
    }
    .card-footer {
        background-color: rgba(13, 13, 13, 0.03);
        border-top-color: rgba(89, 88, 86, 0.13);
    }
    .card-header-tabs {
        border-bottom-color: initial;
    }
    @media (min-width: 576px) {
    .card-group > .card + .card {
        border-left-color: initial;
    }
    }
    .accordion .card:not(:first-of-type):not(:last-of-type) {
        border-bottom-color: initial;
    }
    .accordion .card:first-of-type {
        border-bottom-color: initial;
    }
    .breadcrumb {
        background-color: #222227;
    }
    .breadcrumb-item + .breadcrumb-item::before {
        color: #9d917f;
    }
    .breadcrumb-item + .breadcrumb-item:hover::before {
        text-decoration-color: initial;
        text-decoration-color: initial;
    }
    .breadcrumb-item.active {
        color: #9d917f;
    }
    .page-link {
        color: #4d71af;
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .page-link:hover {
        color: #5778b1;
        text-decoration-color: initial;
        background-color: #222227;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .page-link:focus {
        outline-color: initial;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .page-item.active .page-link {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .page-item.disabled .page-link {
        color: #9d917f;
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .badge-primary {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .badge-primary[href]:hover, .badge-primary[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #204381;
    }
    .badge-secondary {
        color: #b4ada0;
        background-color: #2d3035;
    }
    .badge-secondary[href]:hover, .badge-secondary[href]:focus {
        color: #b4ada0;
        text-decoration-color: initial;
        background-color: #32363c;
    }
    .badge-success {
        color: #cbc8c3;
        background-color: #1a8f61;
    }
    .badge-success[href]:hover, .badge-success[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #166c4a;
    }
    .badge-info {
        color: #cbc8c3;
        background-color: #267580;
    }
    .badge-info[href]:hover, .badge-info[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #21646d;
    }
    .badge-warning {
        color: #b4ada0;
        background-color: #74501b;
    }
    .badge-warning[href]:hover, .badge-warning[href]:focus {
        color: #b4ada0;
        text-decoration-color: initial;
        background-color: #875b1d;
    }
    .badge-danger {
        color: #cbc8c3;
        background-color: #672623;
    }
    .badge-danger[href]:hover, .badge-danger[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #722926;
    }
    .badge-light {
        color: #b4ada0;
        background-color: #1f1f23;
    }
    .badge-light[href]:hover, .badge-light[href]:focus {
        color: #b4ada0;
        text-decoration-color: initial;
        background-color: #25252a;
    }
    .badge-dark {
        color: #cbc8c3;
        background-color: #32353c;
    }
    .badge-dark[href]:hover, .badge-dark[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #222227;
    }
    .jumbotron {
        background-color: #222227;
    }
    .alert {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .alert-heading {
        color: inherit;
    }
    .alert-dismissible .close {
        color: inherit;
    }
    .alert-primary {
        color: #8290aa;
        background-color: #142239;
        border-top-color: #1c396d;
        border-right-color: #1c396d;
        border-bottom-color: #1c396d;
        border-left-color: #1c396d;
    }
    .alert-primary hr {
        border-top-color: #1c3a70;
    }
    .alert-primary .alert-link {
        color: #8f9baf;
    }
    .alert-secondary {
        color: #a69c8c;
        background-color: #202125;
        border-top-color: #34373b;
        border-right-color: #34373b;
        border-bottom-color: #34373b;
        border-left-color: #34373b;
    }
    .alert-secondary hr {
        border-top-color: #35383d;
    }
    .alert-secondary .alert-link {
        color: #aca495;
    }
    .alert-success {
        color: #82c4a7;
        background-color: #1e3b2e;
        border-top-color: #2b604a;
        border-right-color: #2b604a;
        border-bottom-color: #2b604a;
        border-left-color: #2b604a;
    }
    .alert-success hr {
        border-top-color: #2c634c;
    }
    .alert-success .alert-link {
        color: #95c6af;
    }
    .alert-info {
        color: #87b4b8;
        background-color: #1d3437;
        border-top-color: #2b565b;
        border-right-color: #2b565b;
        border-bottom-color: #2b565b;
        border-left-color: #2b565b;
    }
    .alert-info hr {
        border-top-color: #2d585d;
    }
    .alert-info .alert-link {
        color: #98b9bb;
    }
    .alert-warning {
        color: #b09c7e;
        background-color: #3c2c14;
        border-top-color: #74501b;
        border-right-color: #74501b;
        border-bottom-color: #74501b;
        border-left-color: #74501b;
    }
    .alert-warning hr {
        border-top-color: #77521b;
    }
    .alert-warning .alert-link {
        color: #b6a48b;
    }
    .alert-danger {
        color: #ae8682;
        background-color: #361917;
        border-top-color: #602522;
        border-right-color: #602522;
        border-bottom-color: #602522;
        border-left-color: #602522;
    }
    .alert-danger hr {
        border-top-color: #632723;
    }
    .alert-danger .alert-link {
        color: #b4948e;
    }
    .alert-light {
        color: #9f9281;
        background-color: #1e1d22;
        border-top-color: #2c2b44;
        border-right-color: #2c2b44;
        border-bottom-color: #2c2b44;
        border-left-color: #2c2b44;
    }
    .alert-light hr {
        border-top-color: #2c2b47;
    }
    .alert-light .alert-link {
        color: #a49a89;
    }
    .alert-dark {
        color: #b5afa2;
        background-color: #25262c;
        border-top-color: #3b3b3b;
        border-right-color: #3b3b3b;
        border-bottom-color: #3b3b3b;
        border-left-color: #3b3b3b;
    }
    .alert-dark hr {
        border-top-color: #3c3d3d;
    }
    .alert-dark .alert-link {
        color: #bbb7ab;
    }
    .progress {
        background-color: #222227;
    }
    .progress-bar {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .progress-bar-striped {
        background-image: linear-gradient(45deg, rgba(29, 29, 34, 0.15) 25%, rgba(13, 13, 13, 0) 25%, rgba(13, 13, 13, 0) 50%, rgba(29, 29, 34, 0.15) 50%, rgba(29, 29, 34, 0.15) 75%, rgba(13, 13, 13, 0) 75%, rgba(13, 13, 13, 0));
    }
    .list-group-item-action {
        color: #a9a090;
    }
    .list-group-item-action:hover, .list-group-item-action:focus {
        color: #a9a090;
        text-decoration-color: initial;
        background-color: #1f1f23;
    }
    .list-group-item-action:active {
        color: #aea798;
        background-color: #222227;
    }
    .list-group-item {
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.13);
        border-right-color: rgba(89, 88, 86, 0.13);
        border-bottom-color: rgba(89, 88, 86, 0.13);
        border-left-color: rgba(89, 88, 86, 0.13);
    }
    .list-group-item:hover, .list-group-item:focus {
        text-decoration-color: initial;
    }
    .list-group-item.disabled, .list-group-item:disabled {
        color: #9d917f;
        background-color: #1d1d22;
    }
    .list-group-item.active {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .list-group-flush .list-group-item {
        border-right-color: initial;
        border-left-color: initial;
    }
    .list-group-flush:first-child .list-group-item:first-child {
        border-top-color: initial;
    }
    .list-group-flush:last-child .list-group-item:last-child {
        border-bottom-color: initial;
    }
    .list-group-item-primary {
        color: #8290aa;
        background-color: #15243f;
    }
    .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
        color: #8290aa;
        background-color: #162748;
    }
    .list-group-item-primary.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #2b3f61;
        border-top-color: #334c77;
        border-right-color: #334c77;
        border-bottom-color: #334c77;
        border-left-color: #334c77;
    }
    .list-group-item-secondary {
        color: #a69c8c;
        background-color: #222227;
    }
    .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
        color: #a69c8c;
        background-color: #25252a;
    }
    .list-group-item-secondary.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #373c42;
        border-top-color: #4a4b4b;
        border-right-color: #4a4b4b;
        border-bottom-color: #4a4b4b;
        border-left-color: #4a4b4b;
    }
    .list-group-item-success {
        color: #82c4a7;
        background-color: #204133;
    }
    .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
        color: #82c4a7;
        background-color: #224738;
    }
    .list-group-item-success.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #145138;
        border-top-color: #1db176;
        border-right-color: #1db176;
        border-bottom-color: #1db176;
        border-left-color: #1db176;
    }
    .list-group-item-info {
        color: #87b4b8;
        background-color: #203a3d;
    }
    .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
        color: #87b4b8;
        background-color: #223f42;
    }
    .list-group-item-info.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #1b494f;
        border-top-color: #2a8995;
        border-right-color: #2a8995;
        border-bottom-color: #2a8995;
        border-left-color: #2a8995;
    }
    .list-group-item-warning {
        color: #b09c7e;
        background-color: #432f14;
    }
    .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
        color: #b09c7e;
        background-color: #4c3615;
    }
    .list-group-item-warning.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #674f2e;
        border-top-color: #785c34;
        border-right-color: #785c34;
        border-bottom-color: #785c34;
        border-left-color: #785c34;
    }
    .list-group-item-danger {
        color: #ae8682;
        background-color: #3b1a18;
    }
    .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
        color: #ae8682;
        background-color: #421c1a;
    }
    .list-group-item-danger.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #5d2e2b;
        border-top-color: #733834;
        border-right-color: #733834;
        border-bottom-color: #733834;
        border-left-color: #733834;
    }
    .list-group-item-light {
        color: #9f9281;
        background-color: #1a1a25;
    }
    .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
        color: #9f9281;
        background-color: #1c1c29;
    }
    .list-group-item-light.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #353a40;
        border-top-color: #464544;
        border-right-color: #464544;
        border-bottom-color: #464544;
        border-left-color: #464544;
    }
    .list-group-item-dark {
        color: #b5afa2;
        background-color: #282a2f;
    }
    .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
        color: #b5afa2;
        background-color: #2b2d33;
    }
    .list-group-item-dark.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #202025;
        border-top-color: #505659;
        border-right-color: #505659;
        border-bottom-color: #505659;
        border-left-color: #505659;
    }
    .close {
        color: #bdb8ad;
        text-shadow: #1d1d22 0px 1px 0px;
    }
    .close:hover, .close:focus {
        color: #bdb8ad;
        text-decoration-color: initial;
    }
    button.close {
        background-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .modal {
        outline-color: initial;
    }
    .modal-content {
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.2);
        border-right-color: rgba(89, 88, 86, 0.2);
        border-bottom-color: rgba(89, 88, 86, 0.2);
        border-left-color: rgba(89, 88, 86, 0.2);
        outline-color: initial;
    }
    .modal-backdrop {
        background-color: #0d0d0d;
    }
    .modal-header {
        border-bottom-color: #33383d;
    }
    .modal-footer {
        border-top-color: #33383d;
    }
    .tooltip {
        text-decoration-color: initial;
        text-shadow: none;
    }
    .tooltip .arrow::before {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
        border-top-color: #595856;
    }
    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
        border-right-color: #595856;
    }
    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
        border-bottom-color: #595856;
    }
    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
        border-left-color: #595856;
    }
    .tooltip-inner {
        color: #cbc8c3;
        background-color: #0d0d0d;
    }
    .popover {
        text-decoration-color: initial;
        text-shadow: none;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.2);
        border-right-color: rgba(89, 88, 86, 0.2);
        border-bottom-color: rgba(89, 88, 86, 0.2);
        border-left-color: rgba(89, 88, 86, 0.2);
    }
    .popover .arrow::before, .popover .arrow::after {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before {
        border-top-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-top .arrow::after, .bs-popover-auto[x-placement^="top"] .arrow::after {
        border-top-color: #333231;
    }
    .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before {
        border-right-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-right .arrow::after, .bs-popover-auto[x-placement^="right"] .arrow::after {
        border-right-color: #333231;
    }
    .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
        border-bottom-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^="bottom"] .arrow::after {
        border-bottom-color: #333231;
    }
    .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
        border-bottom-color: #353433;
    }
    .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before {
        border-left-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-left .arrow::after, .bs-popover-auto[x-placement^="left"] .arrow::after {
        border-left-color: #333231;
    }
    .popover-header {
        color: inherit;
        background-color: #1f1f23;
        border-bottom-color: #363534;
    }
    .popover-body {
        color: #aea798;
    }
    .carousel-control-prev, .carousel-control-next {
        color: #cbc8c3;
    }
    .carousel-control-prev:hover, .carousel-control-prev:focus, .carousel-control-next:hover, .carousel-control-next:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        outline-color: initial;
    }
    .carousel-control-prev-icon, .carousel-control-next-icon {
        background-image: initial;
        background-color: transparent;
    }
    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }
    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }
    .carousel-indicators li {
        background-color: rgba(29, 29, 34, 0.5);
    }
    .carousel-indicators .active {
        background-color: #1d1d22;
    }
    .carousel-caption {
        color: #cbc8c3;
    }
    .bg-primary {
        background-color: #1d3b71 !important;
    }
    a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus {
        background-color: #204381 !important;
    }
    .bg-secondary {
        background-color: #2d3035 !important;
    }
    a.bg-secondary:hover, a.bg-secondary:focus, button.bg-secondary:hover, button.bg-secondary:focus {
        background-color: #32363c !important;
    }
    .bg-success {
        background-color: #1a8f61 !important;
    }
    a.bg-success:hover, a.bg-success:focus, button.bg-success:hover, button.bg-success:focus {
        background-color: #166c4a !important;
    }
    .bg-info {
        background-color: #267580 !important;
    }
    a.bg-info:hover, a.bg-info:focus, button.bg-info:hover, button.bg-info:focus {
        background-color: #21646d !important;
    }
    .bg-warning {
        background-color: #74501b !important;
    }
    a.bg-warning:hover, a.bg-warning:focus, button.bg-warning:hover, button.bg-warning:focus {
        background-color: #875b1d !important;
    }
    .bg-danger {
        background-color: #672623 !important;
    }
    a.bg-danger:hover, a.bg-danger:focus, button.bg-danger:hover, button.bg-danger:focus {
        background-color: #722926 !important;
    }
    .bg-light {
        background-color: #1f1f23 !important;
    }
    a.bg-light:hover, a.bg-light:focus, button.bg-light:hover, button.bg-light:focus {
        background-color: #25252a !important;
    }
    .bg-dark {
        background-color: #32353c !important;
    }
    a.bg-dark:hover, a.bg-dark:focus, button.bg-dark:hover, button.bg-dark:focus {
        background-color: #222227 !important;
    }
    .bg-white {
        background-color: #1d1d22 !important;
    }
    .bg-transparent {
        background-color: transparent !important;
    }
    .border {
        border-top-color: #383836 !important;
        border-right-color: #383836 !important;
        border-bottom-color: #383836 !important;
        border-left-color: #383836 !important;
    }
    .border-top {
        border-top-color: #383836 !important;
    }
    .border-right {
        border-right-color: #383836 !important;
    }
    .border-bottom {
        border-bottom-color: #383836 !important;
    }
    .border-left {
        border-left-color: #383836 !important;
    }
    .border-0 {
        border-top-color: initial !important;
        border-right-color: initial !important;
        border-bottom-color: initial !important;
        border-left-color: initial !important;
    }
    .border-top-0 {
        border-top-color: initial !important;
    }
    .border-right-0 {
        border-right-color: initial !important;
    }
    .border-bottom-0 {
        border-bottom-color: initial !important;
    }
    .border-left-0 {
        border-left-color: initial !important;
    }
    .border-primary {
        border-top-color: #1f427e !important;
        border-right-color: #1f427e !important;
        border-bottom-color: #1f427e !important;
        border-left-color: #1f427e !important;
    }
    .border-secondary {
        border-top-color: #3b4042 !important;
        border-right-color: #3b4042 !important;
        border-bottom-color: #3b4042 !important;
        border-left-color: #3b4042 !important;
    }
    .border-success {
        border-top-color: #1ca46e !important;
        border-right-color: #1ca46e !important;
        border-bottom-color: #1ca46e !important;
        border-left-color: #1ca46e !important;
    }
    .border-info {
        border-top-color: #277e8a !important;
        border-right-color: #277e8a !important;
        border-bottom-color: #277e8a !important;
        border-left-color: #277e8a !important;
    }
    .border-warning {
        border-top-color: #855b1d !important;
        border-right-color: #855b1d !important;
        border-bottom-color: #855b1d !important;
        border-left-color: #855b1d !important;
    }
    .border-danger {
        border-top-color: #722926 !important;
        border-right-color: #722926 !important;
        border-bottom-color: #722926 !important;
        border-left-color: #722926 !important;
    }
    .border-light {
        border-top-color: #31363b !important;
        border-right-color: #31363b !important;
        border-bottom-color: #31363b !important;
        border-left-color: #31363b !important;
    }
    .border-dark {
        border-top-color: #4c5156 !important;
        border-right-color: #4c5156 !important;
        border-bottom-color: #4c5156 !important;
        border-left-color: #4c5156 !important;
    }
    .border-white {
        border-top-color: #333231 !important;
        border-right-color: #333231 !important;
        border-bottom-color: #333231 !important;
        border-left-color: #333231 !important;
    }
    .embed-responsive .embed-responsive-item, .embed-responsive iframe, .embed-responsive embed, .embed-responsive object, .embed-responsive video {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .sr-only {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .shadow-sm {
        box-shadow: rgba(13, 13, 13, 0.07) 0px 0.125rem 0.25rem !important;
    }
    .shadow {
        box-shadow: rgba(13, 13, 13, 0.15) 0px 0.5rem 1rem !important;
    }
    .shadow-lg {
        box-shadow: rgba(13, 13, 13, 0.18) 0px 1rem 3rem !important;
    }
    .shadow-none {
        box-shadow: none !important;
    }
    .text-white {
        color: #cbc8c3 !important;
    }
    .text-primary {
        color: #4d71af !important;
    }
    a.text-primary:hover, a.text-primary:focus {
        color: #4e71af !important;
    }
    .text-secondary {
        color: #a09583 !important;
    }
    a.text-secondary:hover, a.text-secondary:focus {
        color: #9d917f !important;
    }
    .text-success {
        color: #5ec298 !important;
    }
    a.text-success:hover, a.text-success:focus {
        color: #72c4a0 !important;
    }
    .text-info {
        color: #65abb3 !important;
    }
    a.text-info:hover, a.text-info:focus {
        color: #76b0b6 !important;
    }
    .text-warning {
        color: #ba8d4b !important;
    }
    a.text-warning:hover, a.text-warning:focus {
        color: #ba8b49 !important;
    }
    .text-danger {
        color: #ab5e58 !important;
    }
    a.text-danger:hover, a.text-danger:focus {
        color: #ac615c !important;
    }
    .text-light {
        color: #c7c5be !important;
    }
    a.text-light:hover, a.text-light:focus {
        color: #b9b4a8 !important;
    }
    .text-dark {
        color: #aea798 !important;
    }
    a.text-dark:hover, a.text-dark:focus {
        color: #b4afa1 !important;
    }
    .text-body {
        color: #aea798 !important;
    }
    .text-muted {
        color: #9d917f !important;
    }
    .text-black-50 {
        color: rgba(189, 184, 173, 0.5) !important;
    }
    .text-white-50 {
        color: rgba(203, 200, 195, 0.5) !important;
    }
    .text-hide {
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .bg-dark {
        background-color: #1a8f61 !important;
    }
    .bg-light {
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
        background-color: #1d1d22 !important;
    }
    .btn-secondary, .btn-secondary:hover, .btn-warning, .btn-warning:hover {
        color: #cbc8c3;
    }
    .lead {
        color: #9d917f;
    }
    table-success, table-info, table-warning, table-danger, .table-success, .table-info, .table-warning, .table-danger {
        color: #cbc8c3;
    }
    .table-success, .table-success > th, .table-success > td {
        background-color: #1a8f61;
    }
    .table-info, .table-info > th, .table-info > td {
        background-color: #267580;
    }
    .table-danger, .table-danger > th, .table-danger > td {
        background-color: #672623;
    }
    .table-warning, .table-warning > th, .table-warning > td {
        background-color: #74501b;
    }
    .table-hover .table-success:hover, .table-hover .table-success:hover > th, .table-hover .table-success:hover > td {
        background-color: #197d55;
    }
    .table-hover .table-info:hover, .table-hover .table-info:hover > th, .table-hover .table-info:hover > td {
        background-color: #25727c;
    }
    .table-hover .table-danger:hover, .table-hover .table-danger:hover > th, .table-hover .table-danger:hover > td {
        background-color: #6d2924;
    }
    .table-hover .table-warning:hover, .table-hover .table-warning:hover > th, .table-hover .table-warning:hover > td {
        background-color: #7e551c;
    }
    .alert {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
        color: #cbc8c3;
    }
    .alert a, .alert .alert-link {
        color: #cbc8c3;
        text-decoration-color: initial;
    }
    .alert-primary {
        background-color: #1d3b71;
    }
    .alert-secondary {
        background-color: #2d3035;
    }
    .alert-success {
        background-color: #1a8f61;
    }
    .alert-info {
        background-color: #267580;
    }
    .alert-warning {
        background-color: #74501b;
    }
    .alert-danger {
        background-color: #672623;
    }
    .alert-light {
        background-color: #1f1f23;
    }
    .alert-dark {
        background-color: #32353c;
    }
    .alert-light, .alert-light a, .alert-light .alert-link {
        color: #aea798;
    }
    .badge-secondary, .badge-warning {
        color: #cbc8c3;
    }</style><style class="darkreader darkreader--sync" media="screen">html {
        -webkit-tap-highlight-color: transparent;
    }
    body {
        color: #aea798;
        background-color: #1d1d22;
    }
    [tabindex="-1"]:focus {
        outline-color: initial !important;
    }
    abbr[title], abbr[data-original-title] {
        text-decoration-color: initial;
        border-bottom-color: initial;
    }
    a {
        color: #4d71af;
        text-decoration-color: initial;
        background-color: transparent;
    }
    a:hover {
        color: #5778b1;
        text-decoration-color: initial;
    }
    a:not([href]):not([tabindex]) {
        color: inherit;
        text-decoration-color: initial;
    }
    a:not([href]):not([tabindex]):hover, a:not([href]):not([tabindex]):focus {
        color: inherit;
        text-decoration-color: initial;
    }
    a:not([href]):not([tabindex]):focus {
        outline-color: initial;
    }
    caption {
        color: #9d917f;
    }
    button:focus {
        outline-color: #a27316;
    }
    fieldset {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    legend {
        color: inherit;
    }
    h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
        color: inherit;
    }
    hr {
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
        border-top-color: rgba(89, 88, 86, 0.1);
    }
    mark, .mark {
        background-color: #393314;
    }
    .blockquote-footer {
        color: #9d917f;
    }
    .img-thumbnail {
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .figure-caption {
        color: #9d917f;
    }
    code {
        color: #b24e78;
    }
    a > code {
        color: inherit;
    }
    kbd {
        color: #cbc8c3;
        background-color: #25252b;
    }
    pre {
        color: #b4ada0;
    }
    pre code {
        color: inherit;
    }
    .table {
        background-color: transparent;
    }
    .table th, .table td {
        border-top-color: rgba(89, 88, 86, 0.1);
    }
    .table thead th {
        border-bottom-color: rgba(89, 88, 86, 0.1);
    }
    .table tbody + tbody {
        border-top-color: rgba(89, 88, 86, 0.1);
    }
    .table .table {
        background-color: #1d1d22;
    }
    .table-bordered {
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .table-bordered th, .table-bordered td {
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .table-borderless th, .table-borderless td, .table-borderless thead th, .table-borderless tbody + tbody {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .table-striped tbody tr:nth-of-type(2n+1) {
        background-color: rgba(13, 13, 13, 0.05);
    }
    .table-hover tbody tr:hover {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table-primary, .table-primary > th, .table-primary > td {
        background-color: #15243f;
    }
    .table-hover .table-primary:hover {
        background-color: #162748;
    }
    .table-hover .table-primary:hover > td, .table-hover .table-primary:hover > th {
        background-color: #162748;
    }
    .table-secondary, .table-secondary > th, .table-secondary > td {
        background-color: #222227;
    }
    .table-hover .table-secondary:hover {
        background-color: #25252a;
    }
    .table-hover .table-secondary:hover > td, .table-hover .table-secondary:hover > th {
        background-color: #25252a;
    }
    .table-success, .table-success > th, .table-success > td {
        background-color: #204133;
    }
    .table-hover .table-success:hover {
        background-color: #224738;
    }
    .table-hover .table-success:hover > td, .table-hover .table-success:hover > th {
        background-color: #224738;
    }
    .table-info, .table-info > th, .table-info > td {
        background-color: #203a3d;
    }
    .table-hover .table-info:hover {
        background-color: #223f42;
    }
    .table-hover .table-info:hover > td, .table-hover .table-info:hover > th {
        background-color: #223f42;
    }
    .table-warning, .table-warning > th, .table-warning > td {
        background-color: #432f14;
    }
    .table-hover .table-warning:hover {
        background-color: #4c3615;
    }
    .table-hover .table-warning:hover > td, .table-hover .table-warning:hover > th {
        background-color: #4c3615;
    }
    .table-danger, .table-danger > th, .table-danger > td {
        background-color: #3b1a18;
    }
    .table-hover .table-danger:hover {
        background-color: #421c1a;
    }
    .table-hover .table-danger:hover > td, .table-hover .table-danger:hover > th {
        background-color: #421c1a;
    }
    .table-light, .table-light > th, .table-light > td {
        background-color: #1a1a25;
    }
    .table-hover .table-light:hover {
        background-color: #1c1c29;
    }
    .table-hover .table-light:hover > td, .table-hover .table-light:hover > th {
        background-color: #1c1c29;
    }
    .table-dark, .table-dark > th, .table-dark > td {
        background-color: #282a2f;
    }
    .table-hover .table-dark:hover {
        background-color: #2b2d33;
    }
    .table-hover .table-dark:hover > td, .table-hover .table-dark:hover > th {
        background-color: #2b2d33;
    }
    .table-active, .table-active > th, .table-active > td {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table-hover .table-active:hover {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table-hover .table-active:hover > td, .table-hover .table-active:hover > th {
        background-color: rgba(13, 13, 13, 0.07);
    }
    .table .thead-dark th {
        color: #cbc8c3;
        background-color: #25252b;
        border-top-color: #4d5256;
        border-right-color: #4d5256;
        border-bottom-color: #4d5256;
        border-left-color: #4d5256;
    }
    .table .thead-light th {
        color: #a9a090;
        background-color: #222227;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .table-dark {
        color: #cbc8c3;
        background-color: #25252b;
    }
    .table-dark th, .table-dark td, .table-dark thead th {
        border-top-color: #4d5256;
        border-right-color: #4d5256;
        border-bottom-color: #4d5256;
        border-left-color: #4d5256;
    }
    .table-dark.table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .table-dark.table-striped tbody tr:nth-of-type(2n+1) {
        background-color: rgba(29, 29, 34, 0.05);
    }
    .table-dark.table-hover tbody tr:hover {
        background-color: rgba(29, 29, 34, 0.07);
    }
    @media (max-width: 575.98px) {
    .table-responsive-sm > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    @media (max-width: 767.98px) {
    .table-responsive-md > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    @media (max-width: 991.98px) {
    .table-responsive-lg > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    @media (max-width: 1199.98px) {
    .table-responsive-xl > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    }
    .table-responsive > .table-bordered {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .form-control {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .form-control:focus {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
        outline-color: initial;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .form-control::-webkit-input-placeholder {
        color: #9d917f;
    }
    .form-control::placeholder {
        color: #9d917f;
    }
    .form-control:disabled, .form-control[readonly] {
        background-color: #222227;
    }
    .form-control-plaintext {
        color: #aea798;
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .form-check-input:disabled ~ .form-check-label {
        color: #9d917f;
    }
    .valid-feedback {
        color: #5ec298;
    }
    .valid-tooltip {
        color: #cbc8c3;
        background-color: rgba(26, 143, 97, 0.8);
    }
    .was-validated .form-control:valid, .form-control.is-valid, .was-validated .custom-select:valid, .custom-select.is-valid {
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .was-validated .form-control:valid:focus, .form-control.is-valid:focus, .was-validated .custom-select:valid:focus, .custom-select.is-valid:focus {
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
        box-shadow: rgba(26, 143, 97, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label {
        color: #5ec298;
    }
    .was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label {
        color: #5ec298;
    }
    .was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before {
        background-color: #198258;
    }
    .was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before {
        background-color: #1c9a68;
    }
    .was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before {
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(26, 143, 97, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label {
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .was-validated .custom-file-input:valid ~ .custom-file-label::before, .custom-file-input.is-valid ~ .custom-file-label::before {
        border-top-color: inherit;
        border-right-color: inherit;
        border-bottom-color: inherit;
        border-left-color: inherit;
    }
    .was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label {
        box-shadow: rgba(26, 143, 97, 0.25) 0px 0px 0px 0.2rem;
    }
    .invalid-feedback {
        color: #ab5e58;
    }
    .invalid-tooltip {
        color: #cbc8c3;
        background-color: rgba(103, 38, 35, 0.8);
    }
    .was-validated .form-control:invalid, .form-control.is-invalid, .was-validated .custom-select:invalid, .custom-select.is-invalid {
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .was-validated .form-control:invalid:focus, .form-control.is-invalid:focus, .was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus {
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
        box-shadow: rgba(103, 38, 35, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label {
        color: #ab5e58;
    }
    .was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label {
        color: #ab5e58;
    }
    .was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before {
        background-color: #421b19;
    }
    .was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before {
        background-color: #58221f;
    }
    .was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before {
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(103, 38, 35, 0.25) 0px 0px 0px 0.2rem;
    }
    .was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label {
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .was-validated .custom-file-input:invalid ~ .custom-file-label::before, .custom-file-input.is-invalid ~ .custom-file-label::before {
        border-top-color: inherit;
        border-right-color: inherit;
        border-bottom-color: inherit;
        border-left-color: inherit;
    }
    .was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label {
        box-shadow: rgba(103, 38, 35, 0.25) 0px 0px 0px 0.2rem;
    }
    .btn {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .btn:hover, .btn:focus {
        text-decoration-color: initial;
    }
    .btn:focus, .btn.focus {
        outline-color: initial;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .btn:not(:disabled):not(.disabled):active, .btn:not(:disabled):not(.disabled).active {
        background-image: none;
    }
    .btn-primary {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-primary:hover {
        color: #cbc8c3;
        background-color: #1f427d;
        border-top-color: #204584;
        border-right-color: #204584;
        border-bottom-color: #204584;
        border-left-color: #204584;
    }
    .btn-primary:focus, .btn-primary.focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-primary.disabled, .btn-primary:disabled {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
        color: #cbc8c3;
        background-color: #204381;
        border-top-color: #204586;
        border-right-color: #204586;
        border-bottom-color: #204586;
        border-left-color: #204586;
    }
    .btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-primary.dropdown-toggle:focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-secondary {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-secondary:hover {
        color: #b4ada0;
        background-color: #31343a;
        border-top-color: #3f4346;
        border-right-color: #3f4346;
        border-bottom-color: #3f4346;
        border-left-color: #3f4346;
    }
    .btn-secondary:focus, .btn-secondary.focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-secondary.disabled, .btn-secondary:disabled {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle {
        color: #b4ada0;
        background-color: #32363c;
        border-top-color: #404447;
        border-right-color: #404447;
        border-bottom-color: #404447;
        border-left-color: #404447;
    }
    .btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-secondary.dropdown-toggle:focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-success {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-success:hover {
        color: #cbc8c3;
        background-color: #18744f;
        border-top-color: #1dac73;
        border-right-color: #1dac73;
        border-bottom-color: #1dac73;
        border-left-color: #1dac73;
    }
    .btn-success:focus, .btn-success.focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-success.disabled, .btn-success:disabled {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active, .show > .btn-success.dropdown-toggle {
        color: #cbc8c3;
        background-color: #166c4a;
        border-top-color: #1dae75;
        border-right-color: #1dae75;
        border-bottom-color: #1dae75;
        border-left-color: #1dae75;
    }
    .btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus, .show > .btn-success.dropdown-toggle:focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-info {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-info:hover {
        color: #cbc8c3;
        background-color: #236b75;
        border-top-color: #298490;
        border-right-color: #298490;
        border-bottom-color: #298490;
        border-left-color: #298490;
    }
    .btn-info:focus, .btn-info.focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-info.disabled, .btn-info:disabled {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active, .show > .btn-info.dropdown-toggle {
        color: #cbc8c3;
        background-color: #21646d;
        border-top-color: #298591;
        border-right-color: #298591;
        border-bottom-color: #298591;
        border-left-color: #298591;
    }
    .btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus, .show > .btn-info.dropdown-toggle:focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-warning {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-warning:hover {
        color: #b4ada0;
        background-color: #82581d;
        border-top-color: #8c5f1e;
        border-right-color: #8c5f1e;
        border-bottom-color: #8c5f1e;
        border-left-color: #8c5f1e;
    }
    .btn-warning:focus, .btn-warning.focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-warning.disabled, .btn-warning:disabled {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active, .show > .btn-warning.dropdown-toggle {
        color: #b4ada0;
        background-color: #875b1d;
        border-top-color: #8e611e;
        border-right-color: #8e611e;
        border-bottom-color: #8e611e;
        border-left-color: #8e611e;
    }
    .btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-warning.dropdown-toggle:focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-danger {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-danger:hover {
        color: #cbc8c3;
        background-color: #712925;
        border-top-color: #782b27;
        border-right-color: #782b27;
        border-bottom-color: #782b27;
        border-left-color: #782b27;
    }
    .btn-danger:focus, .btn-danger.focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-danger.disabled, .btn-danger:disabled {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active, .show > .btn-danger.dropdown-toggle {
        color: #cbc8c3;
        background-color: #722926;
        border-top-color: #7a2c28;
        border-right-color: #7a2c28;
        border-bottom-color: #7a2c28;
        border-left-color: #7a2c28;
    }
    .btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-danger.dropdown-toggle:focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-light {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-light:hover {
        color: #b4ada0;
        background-color: #232329;
        border-top-color: #343b40;
        border-right-color: #343b40;
        border-bottom-color: #343b40;
        border-left-color: #343b40;
    }
    .btn-light:focus, .btn-light.focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-light.disabled, .btn-light:disabled {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active, .show > .btn-light.dropdown-toggle {
        color: #b4ada0;
        background-color: #25252a;
        border-top-color: #363b40;
        border-right-color: #363b40;
        border-bottom-color: #363b40;
        border-left-color: #363b40;
    }
    .btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus, .show > .btn-light.dropdown-toggle:focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-dark {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-dark:hover {
        color: #cbc8c3;
        background-color: #26272c;
        border-top-color: #50565a;
        border-right-color: #50565a;
        border-bottom-color: #50565a;
        border-left-color: #50565a;
    }
    .btn-dark:focus, .btn-dark.focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-dark.disabled, .btn-dark:disabled {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active, .show > .btn-dark.dropdown-toggle {
        color: #cbc8c3;
        background-color: #222227;
        border-top-color: #50565b;
        border-right-color: #50565b;
        border-bottom-color: #50565b;
        border-left-color: #50565b;
    }
    .btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-dark.dropdown-toggle:focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-primary {
        color: #4d71af;
        background-color: transparent;
        background-image: none;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-outline-primary:hover {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-outline-primary:focus, .btn-outline-primary.focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-primary.disabled, .btn-outline-primary:disabled {
        color: #4d71af;
        background-color: transparent;
    }
    .btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active, .show > .btn-outline-primary.dropdown-toggle {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-primary.dropdown-toggle:focus {
        box-shadow: rgba(29, 59, 113, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-secondary {
        color: #a09583;
        background-color: transparent;
        background-image: none;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-outline-secondary:hover {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-outline-secondary:focus, .btn-outline-secondary.focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-secondary.disabled, .btn-outline-secondary:disabled {
        color: #a09583;
        background-color: transparent;
    }
    .btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active, .show > .btn-outline-secondary.dropdown-toggle {
        color: #b4ada0;
        background-color: #2d3035;
        border-top-color: #3b4042;
        border-right-color: #3b4042;
        border-bottom-color: #3b4042;
        border-left-color: #3b4042;
    }
    .btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-secondary.dropdown-toggle:focus {
        box-shadow: rgba(45, 48, 53, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-success {
        color: #5ec298;
        background-color: transparent;
        background-image: none;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-outline-success:hover {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-outline-success:focus, .btn-outline-success.focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-success.disabled, .btn-outline-success:disabled {
        color: #5ec298;
        background-color: transparent;
    }
    .btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active, .show > .btn-outline-success.dropdown-toggle {
        color: #cbc8c3;
        background-color: #1a8f61;
        border-top-color: #1ca46e;
        border-right-color: #1ca46e;
        border-bottom-color: #1ca46e;
        border-left-color: #1ca46e;
    }
    .btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-success.dropdown-toggle:focus {
        box-shadow: rgba(26, 143, 97, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-info {
        color: #65abb3;
        background-color: transparent;
        background-image: none;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-outline-info:hover {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-outline-info:focus, .btn-outline-info.focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-info.disabled, .btn-outline-info:disabled {
        color: #65abb3;
        background-color: transparent;
    }
    .btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active, .show > .btn-outline-info.dropdown-toggle {
        color: #cbc8c3;
        background-color: #267580;
        border-top-color: #277e8a;
        border-right-color: #277e8a;
        border-bottom-color: #277e8a;
        border-left-color: #277e8a;
    }
    .btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-info.dropdown-toggle:focus {
        box-shadow: rgba(38, 117, 128, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-warning {
        color: #ba8d4b;
        background-color: transparent;
        background-image: none;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-outline-warning:hover {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-outline-warning:focus, .btn-outline-warning.focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-warning.disabled, .btn-outline-warning:disabled {
        color: #ba8d4b;
        background-color: transparent;
    }
    .btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active, .show > .btn-outline-warning.dropdown-toggle {
        color: #b4ada0;
        background-color: #74501b;
        border-top-color: #855b1d;
        border-right-color: #855b1d;
        border-bottom-color: #855b1d;
        border-left-color: #855b1d;
    }
    .btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-warning.dropdown-toggle:focus {
        box-shadow: rgba(116, 80, 27, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-danger {
        color: #ab5e58;
        background-color: transparent;
        background-image: none;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-outline-danger:hover {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-outline-danger:focus, .btn-outline-danger.focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-danger.disabled, .btn-outline-danger:disabled {
        color: #ab5e58;
        background-color: transparent;
    }
    .btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active, .show > .btn-outline-danger.dropdown-toggle {
        color: #cbc8c3;
        background-color: #672623;
        border-top-color: #722926;
        border-right-color: #722926;
        border-bottom-color: #722926;
        border-left-color: #722926;
    }
    .btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-danger.dropdown-toggle:focus {
        box-shadow: rgba(103, 38, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-light {
        color: #c7c5be;
        background-color: transparent;
        background-image: none;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-outline-light:hover {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-outline-light:focus, .btn-outline-light.focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-light.disabled, .btn-outline-light:disabled {
        color: #c7c5be;
        background-color: transparent;
    }
    .btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active, .show > .btn-outline-light.dropdown-toggle {
        color: #b4ada0;
        background-color: #1f1f23;
        border-top-color: #31363b;
        border-right-color: #31363b;
        border-bottom-color: #31363b;
        border-left-color: #31363b;
    }
    .btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-light.dropdown-toggle:focus {
        box-shadow: rgba(31, 31, 35, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-dark {
        color: #aea798;
        background-color: transparent;
        background-image: none;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-outline-dark:hover {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-outline-dark:focus, .btn-outline-dark.focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-outline-dark.disabled, .btn-outline-dark:disabled {
        color: #aea798;
        background-color: transparent;
    }
    .btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active, .show > .btn-outline-dark.dropdown-toggle {
        color: #cbc8c3;
        background-color: #32353c;
        border-top-color: #4c5156;
        border-right-color: #4c5156;
        border-bottom-color: #4c5156;
        border-left-color: #4c5156;
    }
    .btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus, .show > .btn-outline-dark.dropdown-toggle:focus {
        box-shadow: rgba(50, 53, 60, 0.5) 0px 0px 0px 0.2rem;
    }
    .btn-link {
        color: #4d71af;
        background-color: transparent;
    }
    .btn-link:hover {
        color: #5778b1;
        text-decoration-color: initial;
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .btn-link:focus, .btn-link.focus {
        text-decoration-color: initial;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        box-shadow: none;
    }
    .btn-link:disabled, .btn-link.disabled {
        color: #9d917f;
    }
    .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropdown-menu {
        color: #aea798;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.15);
        border-right-color: rgba(89, 88, 86, 0.15);
        border-bottom-color: rgba(89, 88, 86, 0.15);
        border-left-color: rgba(89, 88, 86, 0.15);
    }
    .dropup .dropdown-toggle::after {
        border-top-color: initial;
        border-right-color: transparent;
        border-bottom-color: initial;
        border-left-color: transparent;
    }
    .dropright .dropdown-toggle::after {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
        border-left-color: initial;
    }
    .dropleft .dropdown-toggle::before {
        border-top-color: transparent;
        border-right-color: initial;
        border-bottom-color: transparent;
    }
    .dropdown-divider {
        border-top-color: #33383d;
    }
    .dropdown-item {
        color: #b4ada0;
        background-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .dropdown-item:hover, .dropdown-item:focus {
        color: #b7b1a4;
        text-decoration-color: initial;
        background-color: #1f1f23;
    }
    .dropdown-item.active, .dropdown-item:active {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #1d3b71;
    }
    .dropdown-item.disabled, .dropdown-item:disabled {
        color: #9d917f;
        background-color: transparent;
    }
    .dropdown-header {
        color: #9d917f;
    }
    .dropdown-item-text {
        color: #b4ada0;
    }
    .input-group-text {
        color: #a9a090;
        background-color: #222227;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-control-input:checked ~ .custom-control-label::before {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .custom-control-input:focus ~ .custom-control-label::before {
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-control-input:active ~ .custom-control-label::before {
        color: #cbc8c3;
        background-color: #131f35;
    }
    .custom-control-input:disabled ~ .custom-control-label {
        color: #9d917f;
    }
    .custom-control-input:disabled ~ .custom-control-label::before {
        background-color: #222227;
    }
    .custom-control-label::before {
        background-color: #242529;
    }
    .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
        background-color: #1d3b71;
    }
    .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");
    }
    .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
        background-color: #1d3b71;
    }
    .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");
    }
    .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
        background-color: rgba(29, 59, 113, 0.5);
    }
    .custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
        background-color: rgba(29, 59, 113, 0.5);
    }
    .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
        background-color: #1d3b71;
    }
    .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");
    }
    .custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
        background-color: rgba(29, 59, 113, 0.5);
    }
    .custom-select {
        color: #a9a090;
        background-image: url("blob:http://127.0.0.1:5500/3129b886-1da5-401c-8322-447a342e6434");
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-select:focus {
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
        outline-color: initial;
        box-shadow: rgba(13, 13, 13, 0.07) 0px 1px 2px inset, rgba(22, 39, 70, 0.5) 0px 0px 5px;
    }
    .custom-select[multiple], .custom-select[size]:not([size="1"]) {
        background-image: none;
    }
    .custom-select:disabled {
        color: #9d917f;
        background-color: #222227;
    }
    .custom-file-input:focus ~ .custom-file-label {
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-file-input:focus ~ .custom-file-label::after {
        border-top-color: #1c3a6f;
        border-right-color: #1c3a6f;
        border-bottom-color: #1c3a6f;
        border-left-color: #1c3a6f;
    }
    .custom-file-label {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-file-label::after {
        color: #a9a090;
        background-color: #222227;
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .custom-range {
        background-color: transparent;
    }
    .custom-range:focus {
        outline-color: initial;
    }
    .custom-range::-webkit-slider-thumb {
        background-color: #1d3b71;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .custom-range::-webkit-slider-thumb:focus {
        outline-color: initial;
        box-shadow: #1d1d22 0px 0px 0px 1px, rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .custom-range::-webkit-slider-thumb:active {
        background-color: #131f35;
    }
    .custom-range::-webkit-slider-runnable-track {
        color: transparent;
        background-color: #242529;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .nav-link:hover, .nav-link:focus {
        text-decoration-color: initial;
    }
    .nav-link.disabled {
        color: #9d917f;
    }
    .nav-tabs {
        border-bottom-color: #383836;
    }
    .nav-tabs .nav-link {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus {
        border-top-color: #33383d;
        border-right-color: #33383d;
        border-bottom-color: #383836;
        border-left-color: #33383d;
    }
    .nav-tabs .nav-link.disabled {
        color: #9d917f;
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
        color: #a9a090;
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #333231;
        border-left-color: #383836;
    }
    .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .navbar-brand:hover, .navbar-brand:focus {
        text-decoration-color: initial;
    }
    .navbar-toggler {
        background-color: transparent;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .navbar-toggler:hover, .navbar-toggler:focus {
        text-decoration-color: initial;
    }
    .navbar-toggler-icon {
        background-image: initial;
        background-color: initial;
    }
    .navbar-light .navbar-brand {
        color: #aea798;
    }
    .navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
        color: #aea798;
    }
    .navbar-light .navbar-nav .nav-link {
        color: rgba(189, 184, 173, 0.5);
    }
    .navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus {
        color: #aea798;
    }
    .navbar-light .navbar-nav .nav-link.disabled {
        color: rgba(189, 184, 173, 0.3);
    }
    .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .active > .nav-link, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .nav-link.active {
        color: #aea798;
    }
    .navbar-light .navbar-toggler {
        color: rgba(189, 184, 173, 0.5);
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
    }
    .navbar-light .navbar-toggler-icon {
        background-image: url("blob:http://127.0.0.1:5500/f2b6a2d4-a284-4c73-967e-68a07630e8b1");
    }
    .navbar-light .navbar-text {
        color: rgba(189, 184, 173, 0.5);
    }
    .navbar-light .navbar-text a {
        color: #aea798;
    }
    .navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus {
        color: #aea798;
    }
    .navbar-dark .navbar-brand {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-nav .nav-link {
        color: rgba(203, 200, 195, 0.6);
    }
    .navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-nav .nav-link.disabled {
        color: rgba(203, 200, 195, 0.25);
    }
    .navbar-dark .navbar-nav .show > .nav-link, .navbar-dark .navbar-nav .active > .nav-link, .navbar-dark .navbar-nav .nav-link.show, .navbar-dark .navbar-nav .nav-link.active {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-toggler {
        color: rgba(203, 200, 195, 0.6);
        border-top-color: rgba(51, 50, 49, 0.1);
        border-right-color: rgba(51, 50, 49, 0.1);
        border-bottom-color: rgba(51, 50, 49, 0.1);
        border-left-color: rgba(51, 50, 49, 0.1);
    }
    .navbar-dark .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.6)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    }
    .navbar-dark .navbar-text {
        color: rgba(203, 200, 195, 0.6);
    }
    .navbar-dark .navbar-text a {
        color: #cbc8c3;
    }
    .navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus {
        color: #cbc8c3;
    }
    .card {
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.13);
        border-right-color: rgba(89, 88, 86, 0.13);
        border-bottom-color: rgba(89, 88, 86, 0.13);
        border-left-color: rgba(89, 88, 86, 0.13);
    }
    .card-link:hover {
        text-decoration-color: initial;
    }
    .card-header {
        background-color: rgba(13, 13, 13, 0.03);
        border-bottom-color: rgba(89, 88, 86, 0.13);
    }
    .card-header + .list-group .list-group-item:first-child {
        border-top-color: initial;
    }
    .card-footer {
        background-color: rgba(13, 13, 13, 0.03);
        border-top-color: rgba(89, 88, 86, 0.13);
    }
    .card-header-tabs {
        border-bottom-color: initial;
    }
    @media (min-width: 576px) {
    .card-group > .card + .card {
        border-left-color: initial;
    }
    }
    .accordion .card:not(:first-of-type):not(:last-of-type) {
        border-bottom-color: initial;
    }
    .accordion .card:first-of-type {
        border-bottom-color: initial;
    }
    .breadcrumb {
        background-color: #222227;
    }
    .breadcrumb-item + .breadcrumb-item::before {
        color: #9d917f;
    }
    .breadcrumb-item + .breadcrumb-item:hover::before {
        text-decoration-color: initial;
        text-decoration-color: initial;
    }
    .breadcrumb-item.active {
        color: #9d917f;
    }
    .page-link {
        color: #4d71af;
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .page-link:hover {
        color: #5778b1;
        text-decoration-color: initial;
        background-color: #222227;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .page-link:focus {
        outline-color: initial;
        box-shadow: rgba(29, 59, 113, 0.25) 0px 0px 0px 0.2rem;
    }
    .page-item.active .page-link {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .page-item.disabled .page-link {
        color: #9d917f;
        background-color: #1d1d22;
        border-top-color: #383836;
        border-right-color: #383836;
        border-bottom-color: #383836;
        border-left-color: #383836;
    }
    .badge-primary {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .badge-primary[href]:hover, .badge-primary[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #204381;
    }
    .badge-secondary {
        color: #b4ada0;
        background-color: #2d3035;
    }
    .badge-secondary[href]:hover, .badge-secondary[href]:focus {
        color: #b4ada0;
        text-decoration-color: initial;
        background-color: #32363c;
    }
    .badge-success {
        color: #cbc8c3;
        background-color: #1a8f61;
    }
    .badge-success[href]:hover, .badge-success[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #166c4a;
    }
    .badge-info {
        color: #cbc8c3;
        background-color: #267580;
    }
    .badge-info[href]:hover, .badge-info[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #21646d;
    }
    .badge-warning {
        color: #b4ada0;
        background-color: #74501b;
    }
    .badge-warning[href]:hover, .badge-warning[href]:focus {
        color: #b4ada0;
        text-decoration-color: initial;
        background-color: #875b1d;
    }
    .badge-danger {
        color: #cbc8c3;
        background-color: #672623;
    }
    .badge-danger[href]:hover, .badge-danger[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #722926;
    }
    .badge-light {
        color: #b4ada0;
        background-color: #1f1f23;
    }
    .badge-light[href]:hover, .badge-light[href]:focus {
        color: #b4ada0;
        text-decoration-color: initial;
        background-color: #25252a;
    }
    .badge-dark {
        color: #cbc8c3;
        background-color: #32353c;
    }
    .badge-dark[href]:hover, .badge-dark[href]:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        background-color: #222227;
    }
    .jumbotron {
        background-color: #222227;
    }
    .alert {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .alert-heading {
        color: inherit;
    }
    .alert-dismissible .close {
        color: inherit;
    }
    .alert-primary {
        color: #8290aa;
        background-color: #142239;
        border-top-color: #1c396d;
        border-right-color: #1c396d;
        border-bottom-color: #1c396d;
        border-left-color: #1c396d;
    }
    .alert-primary hr {
        border-top-color: #1c3a70;
    }
    .alert-primary .alert-link {
        color: #8f9baf;
    }
    .alert-secondary {
        color: #a69c8c;
        background-color: #202125;
        border-top-color: #34373b;
        border-right-color: #34373b;
        border-bottom-color: #34373b;
        border-left-color: #34373b;
    }
    .alert-secondary hr {
        border-top-color: #35383d;
    }
    .alert-secondary .alert-link {
        color: #aca495;
    }
    .alert-success {
        color: #82c4a7;
        background-color: #1e3b2e;
        border-top-color: #2b604a;
        border-right-color: #2b604a;
        border-bottom-color: #2b604a;
        border-left-color: #2b604a;
    }
    .alert-success hr {
        border-top-color: #2c634c;
    }
    .alert-success .alert-link {
        color: #95c6af;
    }
    .alert-info {
        color: #87b4b8;
        background-color: #1d3437;
        border-top-color: #2b565b;
        border-right-color: #2b565b;
        border-bottom-color: #2b565b;
        border-left-color: #2b565b;
    }
    .alert-info hr {
        border-top-color: #2d585d;
    }
    .alert-info .alert-link {
        color: #98b9bb;
    }
    .alert-warning {
        color: #b09c7e;
        background-color: #3c2c14;
        border-top-color: #74501b;
        border-right-color: #74501b;
        border-bottom-color: #74501b;
        border-left-color: #74501b;
    }
    .alert-warning hr {
        border-top-color: #77521b;
    }
    .alert-warning .alert-link {
        color: #b6a48b;
    }
    .alert-danger {
        color: #ae8682;
        background-color: #361917;
        border-top-color: #602522;
        border-right-color: #602522;
        border-bottom-color: #602522;
        border-left-color: #602522;
    }
    .alert-danger hr {
        border-top-color: #632723;
    }
    .alert-danger .alert-link {
        color: #b4948e;
    }
    .alert-light {
        color: #9f9281;
        background-color: #1e1d22;
        border-top-color: #2c2b44;
        border-right-color: #2c2b44;
        border-bottom-color: #2c2b44;
        border-left-color: #2c2b44;
    }
    .alert-light hr {
        border-top-color: #2c2b47;
    }
    .alert-light .alert-link {
        color: #a49a89;
    }
    .alert-dark {
        color: #b5afa2;
        background-color: #25262c;
        border-top-color: #3b3b3b;
        border-right-color: #3b3b3b;
        border-bottom-color: #3b3b3b;
        border-left-color: #3b3b3b;
    }
    .alert-dark hr {
        border-top-color: #3c3d3d;
    }
    .alert-dark .alert-link {
        color: #bbb7ab;
    }
    .progress {
        background-color: #222227;
    }
    .progress-bar {
        color: #cbc8c3;
        background-color: #1d3b71;
    }
    .progress-bar-striped {
        background-image: linear-gradient(45deg, rgba(29, 29, 34, 0.15) 25%, rgba(13, 13, 13, 0) 25%, rgba(13, 13, 13, 0) 50%, rgba(29, 29, 34, 0.15) 50%, rgba(29, 29, 34, 0.15) 75%, rgba(13, 13, 13, 0) 75%, rgba(13, 13, 13, 0));
    }
    .list-group-item-action {
        color: #a9a090;
    }
    .list-group-item-action:hover, .list-group-item-action:focus {
        color: #a9a090;
        text-decoration-color: initial;
        background-color: #1f1f23;
    }
    .list-group-item-action:active {
        color: #aea798;
        background-color: #222227;
    }
    .list-group-item {
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.13);
        border-right-color: rgba(89, 88, 86, 0.13);
        border-bottom-color: rgba(89, 88, 86, 0.13);
        border-left-color: rgba(89, 88, 86, 0.13);
    }
    .list-group-item:hover, .list-group-item:focus {
        text-decoration-color: initial;
    }
    .list-group-item.disabled, .list-group-item:disabled {
        color: #9d917f;
        background-color: #1d1d22;
    }
    .list-group-item.active {
        color: #cbc8c3;
        background-color: #1d3b71;
        border-top-color: #1f427e;
        border-right-color: #1f427e;
        border-bottom-color: #1f427e;
        border-left-color: #1f427e;
    }
    .list-group-flush .list-group-item {
        border-right-color: initial;
        border-left-color: initial;
    }
    .list-group-flush:first-child .list-group-item:first-child {
        border-top-color: initial;
    }
    .list-group-flush:last-child .list-group-item:last-child {
        border-bottom-color: initial;
    }
    .list-group-item-primary {
        color: #8290aa;
        background-color: #15243f;
    }
    .list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus {
        color: #8290aa;
        background-color: #162748;
    }
    .list-group-item-primary.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #2b3f61;
        border-top-color: #334c77;
        border-right-color: #334c77;
        border-bottom-color: #334c77;
        border-left-color: #334c77;
    }
    .list-group-item-secondary {
        color: #a69c8c;
        background-color: #222227;
    }
    .list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus {
        color: #a69c8c;
        background-color: #25252a;
    }
    .list-group-item-secondary.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #373c42;
        border-top-color: #4a4b4b;
        border-right-color: #4a4b4b;
        border-bottom-color: #4a4b4b;
        border-left-color: #4a4b4b;
    }
    .list-group-item-success {
        color: #82c4a7;
        background-color: #204133;
    }
    .list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus {
        color: #82c4a7;
        background-color: #224738;
    }
    .list-group-item-success.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #145138;
        border-top-color: #1db176;
        border-right-color: #1db176;
        border-bottom-color: #1db176;
        border-left-color: #1db176;
    }
    .list-group-item-info {
        color: #87b4b8;
        background-color: #203a3d;
    }
    .list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus {
        color: #87b4b8;
        background-color: #223f42;
    }
    .list-group-item-info.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #1b494f;
        border-top-color: #2a8995;
        border-right-color: #2a8995;
        border-bottom-color: #2a8995;
        border-left-color: #2a8995;
    }
    .list-group-item-warning {
        color: #b09c7e;
        background-color: #432f14;
    }
    .list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus {
        color: #b09c7e;
        background-color: #4c3615;
    }
    .list-group-item-warning.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #674f2e;
        border-top-color: #785c34;
        border-right-color: #785c34;
        border-bottom-color: #785c34;
        border-left-color: #785c34;
    }
    .list-group-item-danger {
        color: #ae8682;
        background-color: #3b1a18;
    }
    .list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus {
        color: #ae8682;
        background-color: #421c1a;
    }
    .list-group-item-danger.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #5d2e2b;
        border-top-color: #733834;
        border-right-color: #733834;
        border-bottom-color: #733834;
        border-left-color: #733834;
    }
    .list-group-item-light {
        color: #9f9281;
        background-color: #1a1a25;
    }
    .list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus {
        color: #9f9281;
        background-color: #1c1c29;
    }
    .list-group-item-light.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #353a40;
        border-top-color: #464544;
        border-right-color: #464544;
        border-bottom-color: #464544;
        border-left-color: #464544;
    }
    .list-group-item-dark {
        color: #b5afa2;
        background-color: #282a2f;
    }
    .list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus {
        color: #b5afa2;
        background-color: #2b2d33;
    }
    .list-group-item-dark.list-group-item-action.active {
        color: #cbc8c3;
        background-color: #202025;
        border-top-color: #505659;
        border-right-color: #505659;
        border-bottom-color: #505659;
        border-left-color: #505659;
    }
    .close {
        color: #bdb8ad;
        text-shadow: #1d1d22 0px 1px 0px;
    }
    .close:hover, .close:focus {
        color: #bdb8ad;
        text-decoration-color: initial;
    }
    button.close {
        background-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .modal {
        outline-color: initial;
    }
    .modal-content {
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.2);
        border-right-color: rgba(89, 88, 86, 0.2);
        border-bottom-color: rgba(89, 88, 86, 0.2);
        border-left-color: rgba(89, 88, 86, 0.2);
        outline-color: initial;
    }
    .modal-backdrop {
        background-color: #0d0d0d;
    }
    .modal-header {
        border-bottom-color: #33383d;
    }
    .modal-footer {
        border-top-color: #33383d;
    }
    .tooltip {
        text-decoration-color: initial;
        text-shadow: none;
    }
    .tooltip .arrow::before {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before {
        border-top-color: #595856;
    }
    .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before {
        border-right-color: #595856;
    }
    .bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before {
        border-bottom-color: #595856;
    }
    .bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before {
        border-left-color: #595856;
    }
    .tooltip-inner {
        color: #cbc8c3;
        background-color: #0d0d0d;
    }
    .popover {
        text-decoration-color: initial;
        text-shadow: none;
        background-color: #1d1d22;
        border-top-color: rgba(89, 88, 86, 0.2);
        border-right-color: rgba(89, 88, 86, 0.2);
        border-bottom-color: rgba(89, 88, 86, 0.2);
        border-left-color: rgba(89, 88, 86, 0.2);
    }
    .popover .arrow::before, .popover .arrow::after {
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
    }
    .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before {
        border-top-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-top .arrow::after, .bs-popover-auto[x-placement^="top"] .arrow::after {
        border-top-color: #333231;
    }
    .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before {
        border-right-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-right .arrow::after, .bs-popover-auto[x-placement^="right"] .arrow::after {
        border-right-color: #333231;
    }
    .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
        border-bottom-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-bottom .arrow::after, .bs-popover-auto[x-placement^="bottom"] .arrow::after {
        border-bottom-color: #333231;
    }
    .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
        border-bottom-color: #353433;
    }
    .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before {
        border-left-color: rgba(89, 88, 86, 0.25);
    }
    .bs-popover-left .arrow::after, .bs-popover-auto[x-placement^="left"] .arrow::after {
        border-left-color: #333231;
    }
    .popover-header {
        color: inherit;
        background-color: #1f1f23;
        border-bottom-color: #363534;
    }
    .popover-body {
        color: #aea798;
    }
    .carousel-control-prev, .carousel-control-next {
        color: #cbc8c3;
    }
    .carousel-control-prev:hover, .carousel-control-prev:focus, .carousel-control-next:hover, .carousel-control-next:focus {
        color: #cbc8c3;
        text-decoration-color: initial;
        outline-color: initial;
    }
    .carousel-control-prev-icon, .carousel-control-next-icon {
        background-image: initial;
        background-color: transparent;
    }
    .carousel-control-prev-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }
    .carousel-control-next-icon {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }
    .carousel-indicators li {
        background-color: rgba(29, 29, 34, 0.5);
    }
    .carousel-indicators .active {
        background-color: #1d1d22;
    }
    .carousel-caption {
        color: #cbc8c3;
    }
    .bg-primary {
        background-color: #1d3b71 !important;
    }
    a.bg-primary:hover, a.bg-primary:focus, button.bg-primary:hover, button.bg-primary:focus {
        background-color: #204381 !important;
    }
    .bg-secondary {
        background-color: #2d3035 !important;
    }
    a.bg-secondary:hover, a.bg-secondary:focus, button.bg-secondary:hover, button.bg-secondary:focus {
        background-color: #32363c !important;
    }
    .bg-success {
        background-color: #1a8f61 !important;
    }
    a.bg-success:hover, a.bg-success:focus, button.bg-success:hover, button.bg-success:focus {
        background-color: #166c4a !important;
    }
    .bg-info {
        background-color: #267580 !important;
    }
    a.bg-info:hover, a.bg-info:focus, button.bg-info:hover, button.bg-info:focus {
        background-color: #21646d !important;
    }
    .bg-warning {
        background-color: #74501b !important;
    }
    a.bg-warning:hover, a.bg-warning:focus, button.bg-warning:hover, button.bg-warning:focus {
        background-color: #875b1d !important;
    }
    .bg-danger {
        background-color: #672623 !important;
    }
    a.bg-danger:hover, a.bg-danger:focus, button.bg-danger:hover, button.bg-danger:focus {
        background-color: #722926 !important;
    }
    .bg-light {
        background-color: #1f1f23 !important;
    }
    a.bg-light:hover, a.bg-light:focus, button.bg-light:hover, button.bg-light:focus {
        background-color: #25252a !important;
    }
    .bg-dark {
        background-color: #32353c !important;
    }
    a.bg-dark:hover, a.bg-dark:focus, button.bg-dark:hover, button.bg-dark:focus {
        background-color: #222227 !important;
    }
    .bg-white {
        background-color: #1d1d22 !important;
    }
    .bg-transparent {
        background-color: transparent !important;
    }
    .border {
        border-top-color: #383836 !important;
        border-right-color: #383836 !important;
        border-bottom-color: #383836 !important;
        border-left-color: #383836 !important;
    }
    .border-top {
        border-top-color: #383836 !important;
    }
    .border-right {
        border-right-color: #383836 !important;
    }
    .border-bottom {
        border-bottom-color: #383836 !important;
    }
    .border-left {
        border-left-color: #383836 !important;
    }
    .border-0 {
        border-top-color: initial !important;
        border-right-color: initial !important;
        border-bottom-color: initial !important;
        border-left-color: initial !important;
    }
    .border-top-0 {
        border-top-color: initial !important;
    }
    .border-right-0 {
        border-right-color: initial !important;
    }
    .border-bottom-0 {
        border-bottom-color: initial !important;
    }
    .border-left-0 {
        border-left-color: initial !important;
    }
    .border-primary {
        border-top-color: #1f427e !important;
        border-right-color: #1f427e !important;
        border-bottom-color: #1f427e !important;
        border-left-color: #1f427e !important;
    }
    .border-secondary {
        border-top-color: #3b4042 !important;
        border-right-color: #3b4042 !important;
        border-bottom-color: #3b4042 !important;
        border-left-color: #3b4042 !important;
    }
    .border-success {
        border-top-color: #1ca46e !important;
        border-right-color: #1ca46e !important;
        border-bottom-color: #1ca46e !important;
        border-left-color: #1ca46e !important;
    }
    .border-info {
        border-top-color: #277e8a !important;
        border-right-color: #277e8a !important;
        border-bottom-color: #277e8a !important;
        border-left-color: #277e8a !important;
    }
    .border-warning {
        border-top-color: #855b1d !important;
        border-right-color: #855b1d !important;
        border-bottom-color: #855b1d !important;
        border-left-color: #855b1d !important;
    }
    .border-danger {
        border-top-color: #722926 !important;
        border-right-color: #722926 !important;
        border-bottom-color: #722926 !important;
        border-left-color: #722926 !important;
    }
    .border-light {
        border-top-color: #31363b !important;
        border-right-color: #31363b !important;
        border-bottom-color: #31363b !important;
        border-left-color: #31363b !important;
    }
    .border-dark {
        border-top-color: #4c5156 !important;
        border-right-color: #4c5156 !important;
        border-bottom-color: #4c5156 !important;
        border-left-color: #4c5156 !important;
    }
    .border-white {
        border-top-color: #333231 !important;
        border-right-color: #333231 !important;
        border-bottom-color: #333231 !important;
        border-left-color: #333231 !important;
    }
    .embed-responsive .embed-responsive-item, .embed-responsive iframe, .embed-responsive embed, .embed-responsive object, .embed-responsive video {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .sr-only {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .shadow-sm {
        box-shadow: rgba(13, 13, 13, 0.07) 0px 0.125rem 0.25rem !important;
    }
    .shadow {
        box-shadow: rgba(13, 13, 13, 0.15) 0px 0.5rem 1rem !important;
    }
    .shadow-lg {
        box-shadow: rgba(13, 13, 13, 0.18) 0px 1rem 3rem !important;
    }
    .shadow-none {
        box-shadow: none !important;
    }
    .text-white {
        color: #cbc8c3 !important;
    }
    .text-primary {
        color: #4d71af !important;
    }
    a.text-primary:hover, a.text-primary:focus {
        color: #4e71af !important;
    }
    .text-secondary {
        color: #a09583 !important;
    }
    a.text-secondary:hover, a.text-secondary:focus {
        color: #9d917f !important;
    }
    .text-success {
        color: #5ec298 !important;
    }
    a.text-success:hover, a.text-success:focus {
        color: #72c4a0 !important;
    }
    .text-info {
        color: #65abb3 !important;
    }
    a.text-info:hover, a.text-info:focus {
        color: #76b0b6 !important;
    }
    .text-warning {
        color: #ba8d4b !important;
    }
    a.text-warning:hover, a.text-warning:focus {
        color: #ba8b49 !important;
    }
    .text-danger {
        color: #ab5e58 !important;
    }
    a.text-danger:hover, a.text-danger:focus {
        color: #ac615c !important;
    }
    .text-light {
        color: #c7c5be !important;
    }
    a.text-light:hover, a.text-light:focus {
        color: #b9b4a8 !important;
    }
    .text-dark {
        color: #aea798 !important;
    }
    a.text-dark:hover, a.text-dark:focus {
        color: #b4afa1 !important;
    }
    .text-body {
        color: #aea798 !important;
    }
    .text-muted {
        color: #9d917f !important;
    }
    .text-black-50 {
        color: rgba(189, 184, 173, 0.5) !important;
    }
    .text-white-50 {
        color: rgba(203, 200, 195, 0.5) !important;
    }
    .text-hide {
        color: transparent;
        text-shadow: none;
        background-color: transparent;
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
    }
    .bg-dark {
        background-color: #1a8f61 !important;
    }
    .bg-light {
        border-top-color: rgba(89, 88, 86, 0.1);
        border-right-color: rgba(89, 88, 86, 0.1);
        border-bottom-color: rgba(89, 88, 86, 0.1);
        border-left-color: rgba(89, 88, 86, 0.1);
        background-color: #1d1d22 !important;
    }
    .btn-secondary, .btn-secondary:hover, .btn-warning, .btn-warning:hover {
        color: #cbc8c3;
    }
    .lead {
        color: #9d917f;
    }
    table-success, table-info, table-warning, table-danger, .table-success, .table-info, .table-warning, .table-danger {
        color: #cbc8c3;
    }
    .table-success, .table-success > th, .table-success > td {
        background-color: #1a8f61;
    }
    .table-info, .table-info > th, .table-info > td {
        background-color: #267580;
    }
    .table-danger, .table-danger > th, .table-danger > td {
        background-color: #672623;
    }
    .table-warning, .table-warning > th, .table-warning > td {
        background-color: #74501b;
    }
    .table-hover .table-success:hover, .table-hover .table-success:hover > th, .table-hover .table-success:hover > td {
        background-color: #197d55;
    }
    .table-hover .table-info:hover, .table-hover .table-info:hover > th, .table-hover .table-info:hover > td {
        background-color: #25727c;
    }
    .table-hover .table-danger:hover, .table-hover .table-danger:hover > th, .table-hover .table-danger:hover > td {
        background-color: #6d2924;
    }
    .table-hover .table-warning:hover, .table-hover .table-warning:hover > th, .table-hover .table-warning:hover > td {
        background-color: #7e551c;
    }
    .alert {
        border-top-color: initial;
        border-right-color: initial;
        border-bottom-color: initial;
        border-left-color: initial;
        color: #cbc8c3;
    }
    .alert a, .alert .alert-link {
        color: #cbc8c3;
        text-decoration-color: initial;
    }
    .alert-primary {
        background-color: #1d3b71;
    }
    .alert-secondary {
        background-color: #2d3035;
    }
    .alert-success {
        background-color: #1a8f61;
    }
    .alert-info {
        background-color: #267580;
    }
    .alert-warning {
        background-color: #74501b;
    }
    .alert-danger {
        background-color: #672623;
    }
    .alert-light {
        background-color: #1f1f23;
    }
    .alert-dark {
        background-color: #32353c;
    }
    .alert-light, .alert-light a, .alert-light .alert-link {
        color: #aea798;
    }
    .badge-secondary, .badge-warning {
        color: #cbc8c3;
    }</style>
      <style class="darkreader darkreader--sync" media="screen"></style>
    `;
    } else {
      head.innerHTML = `
      <!-- Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-122321467-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'UA-122321467-1');
      </script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://bootswatch.com/4/litera/bootstrap.min.css">
      <link rel="stylesheet" href="css/style.css">
      <title>GitFinder</title>`;
    }
  }

  showProfle(user) {
    this.profile.innerHTML = `
    <div class="card card-body">
    <div class="row">
      <div class="col-md-3">
        <img src="${
          user.avatar_url
        }" alt="Profile image" class="img-fluid mb-2">
        <a href="${
          user.html_url
        }" target="_blank" class="btn btn-primary btn-block mb-3"> View on GitHub</a>
      </div> 
      <div class="col-md-9">
        <span class="badge badge-primary mb-1">Public Repos: ${
          user.public_repos
        }</span>
        <span class="badge badge-secondary mb-1">Public Gists: ${
          user.public_repos
        }</span>
        <span class="badge badge-success mb-1">Followers: ${
          user.followers
        }</span>
        <span class="badge badge-primary mb-1">Following: ${
          user.following
        }</span>
        <br><br>
        <ul class="list-group">
          <li class="list-group-item">Name: ${user.login}</li>
          <li class="list-group-item">Company: ${user.company || 'N/A'}</li>
          <li class="list-group-item">Website/Blog: ${user.blog || 'N/A'}</li>
          <li class="list-group-item">Location: ${user.location || 'N/A'}</li>
          <li class="list-group-item">Member since: ${user.created_at.slice(0,10)}</li>
        </ul>
      </div>
    </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos</h3>
    <div id="repos"></div>
    `;

    if (localStorage.getItem("recents")) {
      let rec = JSON.parse(localStorage.getItem("recents"));
      let newArr = rec;

      function add(name) {
        let found = rec.some(function(el) {
          return el.name === name;
        });
        if (!found) {
          if (rec.length === 4) {
            newArr.shift();
            newArr.push({
              name: user.login,
              avatar: user.avatar_url,
              profile: user.html_url
            });
          } else {
            newArr.push({
              name: user.login,
              avatar: user.avatar_url,
              profile: user.html_url
            });
          }
        }
      }
      add(user.login);

      rec = newArr;
      localStorage.setItem("recents", JSON.stringify(rec));
    } else {
      localStorage.setItem(
        "recents",
        JSON.stringify([
          {
            name: user.login,
            avatar: user.avatar_url,
            profile: user.html_url
          }
        ])
      );
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${
              repo.stargazers_count
            }</span>
            <span class="badge badge-secondary">Watchers: ${
              repo.watchers_count
            }</span>
            <span class="badge badge-success">Forks: ${repo.forks_count}</span>
        </div>
      </div>
    </div>
    `;
    });

    document.querySelector("#repos").innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    let div = document.createElement("div");
    div.className = className;
    div.textContent = message;
    document
      .querySelector(".searchContainer")
      .insertAdjacentElement("afterbegin", div);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    let currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  showRecents() {
    let recentsDiv = document.querySelector("#recents");
    let recentsArr = JSON.parse(localStorage.getItem("recents"));
    if (recentsArr) {
      recentsDiv.innerHTML = "";
      recentsArr.forEach((profile, i) => {
        recentsDiv.innerHTML += `
            <div class="col-auto col-sm-6 col-md-3 col-recents">
                <div class="card card-recents">
                    <img class="card-img-top" src="${
                      profile.avatar
                    }" alt="Profile image">
                    <div class="card-main">
                        <h5 class="card-title" id="name-${i}">${
          profile.name
        }</h5>
                        <span class="badge badge-primary show-user">View Profile</span>
                    </div>
                </div>
            </div>`;
      });
    }
  }
}
