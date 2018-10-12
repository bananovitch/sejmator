import React from 'react';
import { AppHeader } from './AppHeader'
import "./RepInfo.css"

export const RepInfo = ({ Rep = {} }) => (
    <main>
        <AppHeader>{ Rep["ludzie.nazwa"] }</AppHeader>
        <div className="rep-info">
            
                {/* Podstawowe informacje */}
                <table className="rep-data-table">
                    <thead>  
                        <tr><th colSpan="2">Podstawowe informacje</th></tr>
                    </thead>
                    <tbody>
                        <tr><th>Klub</th><td>{Rep["sejm_kluby.nazwa"]}</td></tr>
                        <tr><th>Miejsce urodzenia</th><td>{Rep["poslowie.miejsce_urodzenia"]}</td></tr>
                        <tr><th>Data urodzenia</th><td>{Rep["poslowie.data_urodzenia"]}</td></tr>
                        <tr><th>Miejsce zamieszkania</th><td>{Rep["poslowie.miejsce_zamieszkania"]}</td></tr>
                        <tr><th>Zawód</th><td>{Rep["poslowie.zawod"]}</td></tr>
                        <tr><th>Okręg gminy</th><td>{Rep["poslowie.okreg_gminy_str"]}</td></tr>
                        <tr><th>Numer na liście</th><td>{Rep["poslowie.numer_na_liscie"]}</td></tr>
                    </tbody>
                </table>
                {/* Dane o głosowaniach i frekwencji */}
                <table className="rep-data-table">
                    <thead>
                        <tr><th colSpan="2">Dane o głosowaniach i frekwencji</th></tr>
                    </thead>
                <tbody>
                    <tr><th>Frekwencja</th><td>{Rep["poslowie.frekwencja"]}</td></tr>
                    <tr><th>Liczba głosowań</th><td>{Rep["poslowie.liczba_glosowan"]}</td></tr>
                    <tr><th>Liczba projektów uchwał</th><td>{Rep["poslowie.liczba_projektow_uchwal"]}</td></tr>
                    <tr><th>Liczba projektów ustaw</th><td>{Rep["poslowie.liczba_projektow_ustaw"]}</td></tr>
                    <tr><th>Liczba glosowań zbuntowanych</th><td>{Rep["poslowie.liczba_glosowan_zbuntowanych"]}</td></tr>
                    <tr><th>Liczba interpelacji</th><td>{Rep["poslowie.liczba_interpelacji"]}</td></tr>
                    <tr><th>Zbuntowanie</th><td>{Rep["poslowie.zbuntowanie"]}</td></tr>
                    <tr><th>Liczba podkomisji</th><td>{Rep["poslowie.liczba_podkomisji"]}</td></tr>
                    <tr><th>Liczba slów</th><td>{Rep["poslowie.liczba_slow"]}</td></tr>
                    <tr><th>Procent glosów</th><td>{Rep["poslowie.procent_glosow"]}</td></tr>
                    <tr><th>Liczba komisji</th><td>{Rep["poslowie.liczba_komisji"]}</td></tr>
                    <tr><th>Liczba wniosków</th><td>{Rep["poslowie.liczba_wnioskow"]}</td></tr>
                    <tr><th>Liczba wypowiedzi</th><td>{Rep["poslowie.liczba_wypowiedzi"]}</td></tr>
                    <tr><th>Liczba glosowań opuszczonych</th><td>{Rep["poslowie.liczba_glosowan_opuszczonych"]}</td></tr>
                </tbody>
                </table>
                {/* Wydatki */}
                <table className="rep-data-table">
                    <thead>
                        <tr><th colSpan="2">Wydatki</th></tr>
                    </thead>
                    <tbody>
                        <tr><th>Wartość refundacji kwater</th><td>{Rep["poslowie.wartosc_refundacja_kwater_pln"]}</td></tr>
                        <tr><th>Materiały biurowe</th><td>{Rep["poslowie.wartosc_biuro_materialy_biurowe"]}</td></tr>
                        <tr><th>Taksówki</th><td>{Rep["poslowie.wartosc_biuro_taksowki"]}</td></tr>
                        <tr><th>Liczba przejazdów</th><td>{Rep["poslowie.liczba_przejazdow"]}</td></tr>
                        <tr><th>Wynagrodzenia pracowników</th><td>{Rep["poslowie.wartosc_biuro_wynagrodzenia_pracownikow"]}</td></tr>
                        <tr><th>Wartosc uposażenia</th><td>{Rep["poslowie.wartosc_uposazenia_pln"]}</td></tr>
                        <tr><th>Spotkania</th><td>{Rep["poslowie.wartosc_biuro_spotkania"]}</td></tr>
                        <tr><th>Zlecenia</th><td>{Rep["poslowie.wartosc_biuro_zlecenia"]}</td></tr>
                        <tr><th>Liczba przelotów</th><td>{Rep["poslowie.liczba_przelotow"]}</td></tr>
                        <tr><th>Przejazdy</th><td>{Rep["poslowie.wartosc_biuro_przejazdy"]}</td></tr>
                        <tr><th>Biuro - inne</th><td>{Rep["poslowie.wartosc_biuro_inne"]}</td></tr>
                        <tr><th>Biuro - środki trwałe</th><td>{Rep["poslowie.wartosc_biuro_srodki_trwale"]}</td></tr>
                        <tr><th>Biuro</th><td>{Rep["poslowie.wartosc_biuro_biuro"]}</td></tr>
                        <tr><th>Wartosc Wyjazdów</th><td>{Rep["poslowie.wartosc_wyjazdow"]}</td></tr>
                        <tr><th>Liczba wyjazdów</th><td>{Rep["poslowie.liczba_wyjazdow"]}</td></tr>
                        <tr><th>Biuro - telekomunikacja</th><td>{Rep["poslowie.wartosc_biuro_telekomunikacja"]}</td></tr>
                        <tr><th>Biuro - podróże pracownikow</th><td>{Rep["poslowie.wartosc_biuro_podroze_pracownikow"]}</td></tr>
                        <tr><th>Biuro - ekspertyzy</th><td>{Rep["poslowie.wartosc_biuro_ekspertyzy"]}</td></tr>
                    </tbody>
                </table>
        </div>   
    </main>
    
)