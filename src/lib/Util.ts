export function uuid(): string {
  const s = [];
  const hexDigits = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  const uuid = s.join("");
  return uuid;
}
export function randomSelect(list: any[] = []) {
  if (!list) return []
  return list[Math.floor(Math.random() * list.length)]
}
export function randomList(stringList: string[], length: number): string[] {
  if (!stringList) return []

  const resultList: string[] = []
  const randomLimit = stringList?.length || 2
  for (let index = 0; index < length; index++) {
    const selection = Math.floor(Math.random() * randomLimit)
    resultList.push(stringList[selection])

  }
  return resultList;
}

export function randomListWithRepeatOption(list: any[], length: number, allowRepeat: boolean = true): string[] {
  if (!list) return []
  if (allowRepeat) return randomList(list, length)

  let localStringList = [...list];
  const resultList: string[] = []
  for (let index = 0; index < length && index < list.length; index++) {
    const randomLimit = localStringList?.length || 2
    const selection = Math.floor(Math.random() * randomLimit)
    resultList.push(localStringList[selection])
    localStringList = localStringList.filter((x, i) => i !== selection)
  }
  return resultList;
}