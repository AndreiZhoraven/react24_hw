import {useMemo} from 'react';

const useSortedList = (list) => {
    return useMemo(
        () =>
            list.sort((a, b) => {
                return a.title.localeCompare(b.title);
            }),
        [list]
    );
};
export default useSortedList;
