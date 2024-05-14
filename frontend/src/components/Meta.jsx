import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To ABSARWHEELS',
  description: 'We Deal the best CARS for cheap',
  keywords: 'CARS, cheap electroincs',
};

export default Meta;
