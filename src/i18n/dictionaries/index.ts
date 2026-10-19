import type { Locale } from '../config';
import type { Dictionary } from '../types';
import ar from './ar';
import cs from './cs';
import da from './da';
import de from './de';
import el from './el';
import en from './en';
import es from './es';
import fi from './fi';
import fr from './fr';
import hi from './hi';
import hu from './hu';
import id from './id';
import it from './it';
import ja from './ja';
import ko from './ko';
import nl from './nl';
import pl from './pl';
import pt from './pt';
import ro from './ro';
import ru from './ru';
import sv from './sv';
import tr from './tr';
import uk from './uk';
import vi from './vi';
import zh from './zh';

const dictionaries: Record<Locale, Dictionary> = {
    ar, cs, da, de, el, en, es, fi, fr, hi, hu, id, it, ja, ko, nl, pl, pt, ro, ru, sv, tr, uk, vi, zh,
};

export function getDictionary(locale: Locale): Dictionary {
    return dictionaries[locale];
}
