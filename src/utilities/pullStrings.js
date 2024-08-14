import { hostRoot } from 'host';

const tartPull = (imageName) => `tart pull ${hostRoot()}/${imageName}`;
const podmanPull = (imageName) => `podman pull ${hostRoot()}/${imageName}`;
const skopeoPull = (imageName) => `skopeo copy docker://${hostRoot()}/${imageName}`;

export { tartPull, podmanPull, skopeoPull };
