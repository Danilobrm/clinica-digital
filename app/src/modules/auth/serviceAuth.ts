const system: string[] = [];
system[1000] = 'nexgen_solutions';

export default function authenticate(service_code: number) {
  return system[service_code] || 'defaultwl';
}
