// Marque graphique MLD réutilisée dans le Contact et le Footer.
function FooterMark({ withName = false }) {
  return (
    <span className="footer-mark" aria-hidden="true">
      <span className="brand-mark">
        <i />
        <i />
        <i />
      </span>
      {withName && <strong>MLD.</strong>}
    </span>
  );
}

export default FooterMark;
