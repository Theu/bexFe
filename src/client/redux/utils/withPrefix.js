const withPrefix = (prefix, str) => (prefix ? `${prefix}/${str}` : str);

export default withPrefix;
