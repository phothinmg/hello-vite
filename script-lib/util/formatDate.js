import { intlFormat } from 'date-fns';
import siteData from '../siteData';

const formatDate = (date) => intlFormat(new Date(date),{

    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
},{
    locale: siteData.locale,
}

);
export default formatDate;