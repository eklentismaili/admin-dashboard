function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <p className="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by
                <a
                  href="https://al.linkedin.com/in/eklent-ismaili-b936001b6"
                  target="_blank"
                  className="copyright_owner"
                >
                  Eklent Ismaili
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
