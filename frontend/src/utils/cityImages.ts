const CITY_IMAGE_MAP: Record<string, string> = {
  // RE-SCRAPED FRESH VALIDATED SET (FIXING 404s)
  agra: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?fm=jpg&q=60&w=1080&auto=format&fit=crop',
  delhi: 'https://images.unsplash.com/photo-1589977054780-2dc700fdc9d3?fm=jpg&q=60&w=1080&auto=format&fit=crop',
  munnar: 'https://images.unsplash.com/photo-1711192702535-eac61a78ecb0?fm=jpg&q=60&w=1080&auto=format&fit=crop',
  pondicherry: 'https://images.unsplash.com/photo-1662572594228-3aca8503b782?fm=jpg&q=60&w=1080&auto=format&fit=crop',
  hampi: 'https://images.unsplash.com/photo-1722934804353-0d9f6a55ab5e?fm=jpg&q=60&w=1080&auto=format&fit=crop',
  jaisalmer: 'https://images.unsplash.com/photo-1677251486565-8ebade3b1cc4?fm=jpg&q=60&w=1080&auto=format&fit=crop',

  // SCRAPED COMPREHENSIVE SET (CONFIRMED WORKING IN PREVIOUS STEPS)
  mumbai: 'https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?q=80&w=1080&auto=format&fit=crop',
  goa: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1080&auto=format&fit=crop',
  jaipur: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1080&auto=format&fit=crop',
  manali: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1080&auto=format&fit=crop',
  bangalore: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1080&auto=format&fit=crop',
  darjeeling: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1080&auto=format&fit=crop', 
  varanasi: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=1080&auto=format&fit=crop', 
  kerala: 'https://images.unsplash.com/photo-1602216059341-333fe9a23c68?q=80&w=1080&auto=format&fit=crop',
  alleppey: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1080&auto=format&fit=crop', 
  shimla: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?q=80&w=1080&auto=format&fit=crop',
  ooty: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=1080&auto=format&fit=crop',
  kodaikanal: 'https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?q=80&w=1080&auto=format&fit=crop',
  coorg: 'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1080&auto=format&fit=crop',
  mussoorie: 'https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?q=80&w=1080&auto=format&fit=crop',
  varkala: 'https://images.unsplash.com/photo-1545126178-862cdb469409?q=80&w=1080&auto=format&fit=crop',
  andaman: 'https://images.unsplash.com/photo-1461603950871-cd64bcf7acf0?q=80&w=1080&auto=format&fit=crop',
  lakshadweep: 'https://images.unsplash.com/photo-1463592177119-bab2a00f3ccb?q=80&w=1080&auto=format&fit=crop',
  kovalam: 'https://images.unsplash.com/photo-1572915105668-d5b742cb5efd?q=80&w=1080&auto=format&fit=crop',
  khajuraho: 'https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?q=80&w=1080&auto=format&fit=crop',
  coimbatore: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1080&auto=format&fit=crop',
  kolkata: 'https://images.unsplash.com/photo-1577083753695-e010191bacb5?q=80&w=1080&auto=format&fit=crop',
  jodhpur: 'https://images.unsplash.com/photo-1504448252408-b32799ff32f3?q=80&w=1080&auto=format&fit=crop',
  ranthambore: 'https://images.unsplash.com/photo-1580060092295-dbe639fffda3?q=80&w=1080&auto=format&fit=crop',
  corbett: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1080&auto=format&fit=crop', 
  kaziranga: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1080&auto=format&fit=crop',
  ladakh: 'https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1080&auto=format&fit=crop',
  rishikesh: 'https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=1080&auto=format&fit=crop',
  amritsar: 'https://images.unsplash.com/photo-1519955266818-0231b63402bc?q=80&w=1080&auto=format&fit=crop',
  hyderabad: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1080&auto=format&fit=crop',
};

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1080&auto=format&fit=crop';

export function getCityImage(id: string): string {
  if (!id) return FALLBACK_IMAGE;
  const normalizedId = id.toLowerCase().trim();
  
  return CITY_IMAGE_MAP[normalizedId] 
    || CITY_IMAGE_MAP[normalizedId.split('-')[0]] 
    || FALLBACK_IMAGE;
}
