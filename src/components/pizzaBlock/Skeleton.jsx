import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="141" cy="132" r="84" />
    <rect x="4" y="231" rx="3" ry="3" width="270" height="32" />
    <rect x="3" y="274" rx="3" ry="3" width="270" height="73" />
    <rect x="4" y="353" rx="3" ry="3" width="99" height="28" />
    <rect x="163" y="354" rx="10" ry="10" width="111" height="33" />
  </ContentLoader>
);

export default Skeleton;
