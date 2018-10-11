import React from 'react';
import { AppHeader } from './AppHeader'

export const RepInfo = ({ Rep = {} }) => (
    <main>
        <AppHeader>{ Rep["ludzie.nazwa"] }</AppHeader>
        <div className="rep-info">
            <table>
                <tr>
                    <th>Klub</th>
                    <td>{Rep["sejm_kluby.nazwa"]}</td>
                </tr>
                <tr>
                    <th>Miejsce urodzenia</th>
                    <td>{Rep["poslowie.miejsce_urodzenia"]}</td>
                </tr>
                <tr>
                    <th>Data urodzenia</th>
                    <td>{Rep["poslowie.data_urodzenia"]}</td>
                </tr>
                <tr>
                    <th>Miejsce zamieszkania</th>
                    <td>{Rep["poslowie.miejsce_zamieszkania"]}</td>
                </tr>
                <tr>
                    <th>Frekwencja</th>
                    <td>{Rep["poslowie.frekwencja"]}</td>
                </tr>
                <tr>
                    <th>Liczba głosowań</th>
                    <td>{Rep["poslowie.liczba_glosowan"]}</td>
                </tr>
                <tr>
                    <th>Liczba projektów uchwał</th>
                    <td>{Rep["poslowie.liczba_projektow_uchwal"]}</td>
                </tr>
                <tr>
                    <th>Zawód</th>
                    <td>{Rep["poslowie.zawod"]}</td>
                </tr>
                <tr><th>wartosc_refundacja_kwater_pln</th><td>{Rep["poslowie.wartosc_refundacja_kwater_pln"]}</td></tr>
                <tr><th>liczba_wyjazdow8</th><td>{Rep["poslowie.liczba_wyjazdow8"]}</td></tr>
                <tr><th>wartosc_biuro_materialy_biurowe</th><td>{Rep["poslowie.wartosc_biuro_materialy_biurowe"]}</td></tr>
                <tr><th>wartosc_biuro_taksowki</th><td>{Rep["poslowie.wartosc_biuro_taksowki"]}</td></tr>
                <tr><th>liczba_glosowan_zbuntowanych</th><td>{Rep["poslowie.liczba_glosowan_zbuntowanych"]}</td></tr>
                <tr><th>liczba_przejazdow</th><td>{Rep["poslowie.liczba_przejazdow"]}</td></tr>
                <tr><th>liczba_projektow_uchwal</th><td>{Rep["poslowie.liczba_projektow_uchwal"]}</td></tr>
                <tr><th>okreg_gminy_str</th><td>{Rep["poslowie.okreg_gminy_str"]}</td></tr>
                <tr><th>wartosc_biuro_wynagrodzenia_pracownikow</th><td>{Rep["poslowie.wartosc_biuro_wynagrodzenia_pracownikow"]}</td></tr>
                <tr><th>wartosc_uposazenia_pln</th><td>{Rep["poslowie.wartosc_uposazenia_pln"]}</td></tr>
                <tr><th>wartosc_wyjazdow8</th><td>{Rep["poslowie.wartosc_wyjazdow8"]}</td></tr>
                <tr><th>liczba_interpelacji</th><td>{Rep["poslowie.liczba_interpelacji"]}</td></tr>
                <tr><th>zbuntowanie</th><td>{Rep["poslowie.zbuntowanie"]}</td></tr>
                <tr><th>liczba_podkomisji</th><td>{Rep["poslowie.liczba_podkomisji"]}</td></tr>
                <tr><th>liczba_glosowan</th><td>{Rep["poslowie.liczba_glosowan"]}</td></tr>
                <tr><th>data_urodzenia</th><td>{Rep["poslowie.data_urodzenia"]}</td></tr>
                <tr><th>wartosc_biuro_spotkania</th><td>{Rep["poslowie.wartosc_biuro_spotkania"]}</td></tr>
                <tr><th>wartosc_biuro_zlecenia</th><td>{Rep["poslowie.wartosc_biuro_zlecenia"]}</td></tr>
                <tr><th>liczba_przelotow</th><td>{Rep["poslowie.liczba_przelotow"]}</td></tr>
                <tr><th>liczba_slow</th><td>{Rep["poslowie.liczba_slow"]}</td></tr>
                <tr><th>wartosc_biuro_przejazdy</th><td>{Rep["poslowie.wartosc_biuro_przejazdy"]}</td></tr>
                <tr><th>liczba_projektow_ustaw</th><td>{Rep["poslowie.liczba_projektow_ustaw"]}</td></tr>
                <tr><th>procent_glosow</th><td>{Rep["poslowie.procent_glosow"]}</td></tr>
                <tr><th>wartosc_biuro_inne</th><td>{Rep["poslowie.wartosc_biuro_inne"]}</td></tr>
                <tr><th>wartosc_biuro_srodki_trwale</th><td>{Rep["poslowie.wartosc_biuro_srodki_trwale"]}</td></tr>
                <tr><th>frekwencja</th><td>{Rep["poslowie.frekwencja"]}</td></tr>
                <tr><th>liczba_komisji</th><td>{Rep["poslowie.liczba_komisji"]}</td></tr>
                <tr><th>wartosc_biuro_biuro</th><td>{Rep["poslowie.wartosc_biuro_biuro"]}</td></tr>
                <tr><th>zawod</th><td>{Rep["poslowie.zawod"]}</td></tr>
                <tr><th>wartosc_wyjazdow</th><td>{Rep["poslowie.wartosc_wyjazdow"]}</td></tr>
                <tr><th>numer_na_liscie</th><td>{Rep["poslowie.numer_na_liscie"]}</td></tr>
                <tr><th>liczba_wyjazdow</th><td>{Rep["poslowie.liczba_wyjazdow"]}</td></tr>
                <tr><th>wartosc_biuro_telekomunikacja</th><td>{Rep["poslowie.wartosc_biuro_telekomunikacja"]}</td></tr>
                <tr><th>wartosc_biuro_podroze_pracownikow</th><td>{Rep["poslowie.wartosc_biuro_podroze_pracownikow"]}</td></tr>
                <tr><th>wartosc_biuro_ekspertyzy</th><td>{Rep["poslowie.wartosc_biuro_ekspertyzy"]}</td></tr>
                <tr><th>liczba_wnioskow</th><td>{Rep["poslowie.liczba_wnioskow"]}</td></tr>
                <tr><th>liczba_wypowiedzi</th><td>{Rep["poslowie.liczba_wypowiedzi"]}</td></tr>
                <tr><th>liczba_glosowan_opuszczonych</th><td>{Rep["poslowie.liczba_glosowan_opuszczonych"]}</td></tr>
            </table>
        </div>
        
    </main>
    
)