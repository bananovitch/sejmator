import React from 'react';
import { RepInfo } from './RepInfo';


//This is a sample response from the server for building representational component
const TestRep = {"id":"1384","dataset":"poslowie","url":"https:\/\/api-v3.mojepanstwo.pl\/dane\/poslowie\/1384","mp_url":"https:\/\/mojepanstwo.pl\/dane\/poslowie\/1384","schema_url":"https:\/\/api-v3.mojepanstwo.pl\/schemas\/dane\/poslowie.json","global_id":"30648554","slug":"wilk-wojciech","score":null,"data":{"ludzie.id":"1799","ludzie.nazwa":"Wojciech Wilk","ludzie.slug":"","sejm_kluby.skrot":"PO","sejm_kluby.id":"1","sejm_kluby.nazwa":"Platforma Obywatelska","poslowie.wartosc_refundacja_kwater_pln":0,"poslowie.liczba_wyjazdow8":0,"poslowie.wartosc_biuro_materialy_biurowe":0,"poslowie.wartosc_biuro_taksowki":0,"poslowie.liczba_glosowan_zbuntowanych":17,"poslowie.nazwa":"Wojciech Wilk","poslowie.liczba_glosow":7772,"poslowie.dopelniacz":"","poslowie.liczba_przejazdow":0,"poslowie.liczba_projektow_uchwal":0,"poslowie.okreg_gminy_str":"Lublin, \u015awidnik, Kra\u015bnik","poslowie.imie_drugie":"","poslowie.wartosc_biuro_wynagrodzenia_pracownikow":0,"poslowie.wartosc_uposazenia_pln":0,"poslowie.id":"1384","poslowie.wartosc_wyjazdow8":0,"poslowie.liczba_interpelacji":50,"poslowie.zbuntowanie":0.5,"poslowie.sejm_okreg_id":"6","poslowie.twitter_account_id":"0","poslowie.liczba_podkomisji":0,"poslowie.imiona":"Wojciech","poslowie.liczba_glosowan":3522,"poslowie.nazwa_odwrocona":"Wilk Wojciech","poslowie.liczba_uchwal_komisji_etyki":0,"poslowie.plec":"M","poslowie.data_urodzenia":"1972-08-12","poslowie.wartosc_biuro_spotkania":0,"poslowie.wartosc_biuro_zlecenia":0,"poslowie.liczba_przelotow":0,"poslowie.liczba_slow":16235,"poslowie.wartosc_biuro_przejazdy":0,"poslowie.miejsce_urodzenia":"Kra\u015bnik","poslowie.liczba_projektow_ustaw":0,"poslowie.pkw_nr_listy":"0","poslowie.procent_glosow":1.69,"poslowie.kadencja":[8],"poslowie.mowca_id":"0","poslowie.wartosc_biuro_inne":0,"poslowie.miejsce_zamieszkania":"Kra\u015bnik","poslowie.wartosc_biuro_srodki_trwale":0,"poslowie.mandat_wygasl":"0","poslowie.frekwencja":97.6,"poslowie.numer_legitymacji":426,"poslowie.nazwisko":"Wilk","poslowie.liczba_komisji":0,"poslowie.pkw_komitet_id":"3","poslowie.wartosc_biuro_biuro":0,"poslowie.imie_pierwsze":"Wojciech","poslowie.zawod":"urz\u0119dnik pa\u0144stwowy","poslowie.okreg_wyborczy_numer":"6","poslowie.wartosc_wyjazdow":0,"poslowie.krs_osoba_id":"0","poslowie.numer_na_liscie":4,"poslowie.liczba_wyjazdow":0,"poslowie.klub_id":"1","poslowie.wartosc_biuro_telekomunikacja":0,"poslowie.wartosc_biuro_podroze_pracownikow":0,"poslowie.biuro_html":"<table><thead><th class=\"left\">Wydatkowanie kwoty rycza\u0142tu przeznaczonego na prowadzenie biura poselskiego:<\/th><\/thead><tbody><tr><td class=\"left\">Sprawozdanie za <A class=\"pdf right\" HREF=\"http:\/\/orka.sejm.gov.pl\/rozlicz7.nsf\/lista\/2011426\/$File\/2011ryczalt_426.pdf?OpenElement\" target=\"_blank\">2011 rok<\/A><\/td><\/tr><tr><td class=\"left\">Sprawozdanie za <A class=\"pdf right\" HREF=\"http:\/\/orka.sejm.gov.pl\/rozlicz7.nsf\/lista\/2012426\/$File\/2012ryczalt_426.pdf?OpenElement\" target=\"_blank\">2012 rok<\/A><\/td><\/tr><tr><td class=\"left\">Sprawozdanie za <A class=\"pdf right\" HREF=\"http:\/\/orka.sejm.gov.pl\/rozlicz7.nsf\/lista\/2013426\/$File\/2013ryczalt_426.pdf?OpenElement\" target=\"_blank\">2013 rok<\/A><\/td><\/tr><tr><td class=\"left\">Rozliczenie za <A class=\"pdf right\" HREF=\"http:\/\/orka.sejm.gov.pl\/rozlicz7.nsf\/lista\/2014426\/$File\/2014ryczalt_426.pdf?OpenElement\" target=\"_blank\">okres sprawowania mandatu <\/A><\/td><\/tr><tr><td class=\"left\">Korekta za <A class=\"pdf right\" HREF=\"http:\/\/orka.sejm.gov.pl\/rozlicz7.nsf\/lista\/2014426k\/$File\/2014ryczaltkor_426.pdf?OpenElement\" target=\"_blank\">okres sprawowania mandatu<\/A><\/td><\/tr><\/tbody><\/table>","poslowie.kadencja_ostatnia":"8","poslowie.wartosc_biuro_ekspertyzy":0,"poslowie.liczba_wnioskow":0,"poslowie.liczba_wypowiedzi":41,"poslowie.rozliczenie_id":"272718","poslowie.liczba_glosowan_opuszczonych":86},"layers":{"dataset":null,"channels":null,"page":null,"subscribers":null},"Aggs":{"_page":{"doc_count":0,"page":{"hits":{"total":0,"max_score":null,"hits":[]}}}}}

export class RepInfoContainer extends React.Component {

    constructor(props) {
        super(props);
        this.fetchRepInfo = this.fetchRepInfo.bind(this);
        this.state = {
            repId: null,
            repData:null
        }
    };

    fetchRepInfo( repId ) {
        fetch(`https://api-v3.mojepanstwo.pl/dane/poslowie/1384${repId}`)
        .then(response => response.json())
        .then(response => this.setState({repData:response}));
      }

    componentDidMount() {
        this.setState({repId: this.props.match.id});
        this.fetchRepInfo(this.state.repId)
    };



    render() {
        return(<RepInfo Rep={TestRep} />)
    };

}