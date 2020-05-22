import { withPrefix } from './';

const createTypes = (prefix, arr) => arr.reduce((total, current) => ({
    ...total,
    [current]: withPrefix(prefix, current)
}), {});

export default createTypes;
