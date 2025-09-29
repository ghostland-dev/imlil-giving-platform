import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  path?: string;
}

const SEO = ({ title, description, keywords, ogImage, path = "" }: SEOProps) => {
  const siteUrl = "https://association-imlil.ma";
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | Association Imlil</title>
      <meta name="title" content={`${title} | Association Imlil`} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={`${title} | Association Imlil`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:site_name" content="Association Imlil" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:locale:alternate" content="ar_MA" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={`${title} | Association Imlil`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage || defaultImage} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Association Imlil" />
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
