export const UPDATE_ENTRIES = 'DISCUSSIONS/UPDATE_ENTRIES';

export function updateEntries(entries) {
  return { type: UPDATE_ENTRIES, entries };
}
