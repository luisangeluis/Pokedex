import React from 'react';

const Loader = () => {
  return (
    <section className="loader position-absolute">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </section>
  );
};

export default Loader;
