import React from 'react'

const Footer = () => {
  return (
    <>
      <footer class="d-flex flex-wrap justify-content-between align-items-center footer-light bg-warning text-white py-5 my-4border-top">
        <div class="col-md-4 d-flex align-items-center">
          <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            {/* <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
          </a>
          <span class="mb-3 mb-md-0 text-muted">© 2022 Company, Inc tempat rafting bogor powered by: Wahyu Ward</span>
        </div>

        <ul class="nav col-md-4 justify-content-between list-unstyled d-flex">
          {/* <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
          <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li> */}
        </ul>
      </footer>
    </>
  )
}

export default Footer