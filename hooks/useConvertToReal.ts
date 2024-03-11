export const useConvertToReal = (value: number) => {
  return `R$ ${value.toFixed(2).replace('.', ',')}`;
};
