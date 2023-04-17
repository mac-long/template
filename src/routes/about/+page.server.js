import {getAll} from '$lib/server';

export const load = () => {
  const users = getAll('users');

  return {
    users
  };
};
