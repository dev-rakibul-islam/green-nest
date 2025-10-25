import React, { useState, useCallback } from "react";

const LazyImage = ({
  src,
  alt = "",
  className = "",
  style,
  onError,
  onLoad,
  fallback = "/images/avatar-placeholder.svg",
  fetchPriority = "low",
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleLoad = useCallback(
    (e) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad]
  );

  const handleError = useCallback(
    (e) => {
      setFailed(true);
      if (fallback && e?.currentTarget) {
        e.currentTarget.src = fallback;
      }
      onError?.(e);
    },
    [onError, fallback]
  );

  return (
    <img
      src={failed ? fallback : src}
      alt={alt}
      loading="lazy"
      decoding="async"
      fetchpriority={fetchPriority}
      className={`${className} ${
        loaded ? "" : "animate-pulse bg-base-200"
      }`.trim()}
      style={style}
      onLoad={handleLoad}
      onError={handleError}
      {...rest}
    />
  );
};

export default LazyImage;
