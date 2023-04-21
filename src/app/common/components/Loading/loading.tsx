import React from "react";

interface LoadingProps {
  isLoading: boolean;
}

const Loading = (props: LoadingProps) => {
  const { isLoading } = props;
  return (
    <div id="preloader" className={`${!isLoading ? 'preloaded' : ''}`}>
      <div className={`loader_line ` }></div>
    </div>
  );
};

export default Loading;
