import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from "react";

const ModalPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
      setShowModal(true);
    };

    const handleClose = () => {
      setShowModal(false);
    };

    return (
        <div>
            <Button onClick={handleClick} primary>Open modal</Button>
            {showModal && <Modal onClose={handleClose}/>}
            <p>
                Zadanie rekrutacyjne RDN

                Wstęp
                Cześć!
                W ramach Twojego zadania rekrutacyjnego dla React Native Developer w FC.APP, prosimy o
                przygotowanie ekranu w aplikacji zgodnie z wytycznymi dostępnymi pod linkiem do Figma.
                Celem jest przetestowanie Twojej umiejętności efektywnego tworzenia UI i łączenia go z
                API. Poniżej znajdziesz instrukcję i odnośniki.
                Prosimy o przesłanie repozytorium na contact@fcapp.eu do godz. 15:00 21.04. Cenimy
                dynamiczną pracę - termin przesłania również będzie miał znaczenie.
                Powodzenia
                Zespół FC.APP
                Materiały
                Widoki: Figma
                Widoki nie muszą zostać odwzorowane 1:1 - jako zamienniki komponentów mogą zostać
                wykorzystane te z NativeBase v3.4 Design Kit.
                Szkielet aplikacji: GitHub
                Zadanie
                Stwórzy na stornie Home listę z komponentów Button
                Stwórz komponent Button w 3 wersjach: outline, filled, simple
                Przykładowe props:
                - mode
                - onPress
                - text
                - icon
                Po kliknięciu w przycisk “Zarejestruj się emailem”, przejdź do strony rejestracji
                Formularz rejestracyjny wykonaj za pomocą biblioteki use-form-hook
                Stwórz komponent formularza zawierający wszystkie kroki wraz z animacjami przejscia.
                (opcjonalne) zastosuj https://www.npmjs.com/package/react-native-animated-numbers do
                animacji cyfr

                Zastosuj walidację pól po stronie backendu:
                https://api.dev.footballchallengeapp.com/swagger/
                /auth/registration
                W przypadku wystąpienia błędu przejdź na odpowiednią stronę komponentu i pokaż błąd
                poprzez podświetlenie komponentu i wyświetlenie błędu pod spodem pola.
                Forma przygotowania: link do własnego repozytorium GitHub / GitLab lub paczka ZIP
                W razie pytań, pisz śmiało na contact@fcapp.eu.
                Powodzenia!
            </p>
            <p>
                Zadanie rekrutacyjne RDN

                Wstęp
                Cześć!
                W ramach Twojego zadania rekrutacyjnego dla React Native Developer w FC.APP, prosimy o
                przygotowanie ekranu w aplikacji zgodnie z wytycznymi dostępnymi pod linkiem do Figma.
                Celem jest przetestowanie Twojej umiejętności efektywnego tworzenia UI i łączenia go z
                API. Poniżej znajdziesz instrukcję i odnośniki.
                Prosimy o przesłanie repozytorium na contact@fcapp.eu do godz. 15:00 21.04. Cenimy
                dynamiczną pracę - termin przesłania również będzie miał znaczenie.
                Powodzenia
                Zespół FC.APP
                Materiały
                Widoki: Figma
                Widoki nie muszą zostać odwzorowane 1:1 - jako zamienniki komponentów mogą zostać
                wykorzystane te z NativeBase v3.4 Design Kit.
                Szkielet aplikacji: GitHub
                Zadanie
                Stwórzy na stornie Home listę z komponentów Button
                Stwórz komponent Button w 3 wersjach: outline, filled, simple
                Przykładowe props:
                - mode
                - onPress
                - text
                - icon
                Po kliknięciu w przycisk “Zarejestruj się emailem”, przejdź do strony rejestracji
                Formularz rejestracyjny wykonaj za pomocą biblioteki use-form-hook
                Stwórz komponent formularza zawierający wszystkie kroki wraz z animacjami przejscia.
                (opcjonalne) zastosuj https://www.npmjs.com/package/react-native-animated-numbers do
                animacji cyfr

                Zastosuj walidację pól po stronie backendu:
                https://api.dev.footballchallengeapp.com/swagger/
                /auth/registration
                W przypadku wystąpienia błędu przejdź na odpowiednią stronę komponentu i pokaż błąd
                poprzez podświetlenie komponentu i wyświetlenie błędu pod spodem pola.
                Forma przygotowania: link do własnego repozytorium GitHub / GitLab lub paczka ZIP
                W razie pytań, pisz śmiało na contact@fcapp.eu.
                Powodzenia!
            </p>
            <p>
                Zadanie rekrutacyjne RDN

                Wstęp
                Cześć!
                W ramach Twojego zadania rekrutacyjnego dla React Native Developer w FC.APP, prosimy o
                przygotowanie ekranu w aplikacji zgodnie z wytycznymi dostępnymi pod linkiem do Figma.
                Celem jest przetestowanie Twojej umiejętności efektywnego tworzenia UI i łączenia go z
                API. Poniżej znajdziesz instrukcję i odnośniki.
                Prosimy o przesłanie repozytorium na contact@fcapp.eu do godz. 15:00 21.04. Cenimy
                dynamiczną pracę - termin przesłania również będzie miał znaczenie.
                Powodzenia
                Zespół FC.APP
                Materiały
                Widoki: Figma
                Widoki nie muszą zostać odwzorowane 1:1 - jako zamienniki komponentów mogą zostać
                wykorzystane te z NativeBase v3.4 Design Kit.
                Szkielet aplikacji: GitHub
                Zadanie
                Stwórzy na stornie Home listę z komponentów Button
                Stwórz komponent Button w 3 wersjach: outline, filled, simple
                Przykładowe props:
                - mode
                - onPress
                - text
                - icon
                Po kliknięciu w przycisk “Zarejestruj się emailem”, przejdź do strony rejestracji
                Formularz rejestracyjny wykonaj za pomocą biblioteki use-form-hook
                Stwórz komponent formularza zawierający wszystkie kroki wraz z animacjami przejscia.
                (opcjonalne) zastosuj https://www.npmjs.com/package/react-native-animated-numbers do
                animacji cyfr

                Zastosuj walidację pól po stronie backendu:
                https://api.dev.footballchallengeapp.com/swagger/
                /auth/registration
                W przypadku wystąpienia błędu przejdź na odpowiednią stronę komponentu i pokaż błąd
                poprzez podświetlenie komponentu i wyświetlenie błędu pod spodem pola.
                Forma przygotowania: link do własnego repozytorium GitHub / GitLab lub paczka ZIP
                W razie pytań, pisz śmiało na contact@fcapp.eu.
                Powodzenia!
            </p>
            <p>
                Zadanie rekrutacyjne RDN

                Wstęp
                Cześć!
                W ramach Twojego zadania rekrutacyjnego dla React Native Developer w FC.APP, prosimy o
                przygotowanie ekranu w aplikacji zgodnie z wytycznymi dostępnymi pod linkiem do Figma.
                Celem jest przetestowanie Twojej umiejętności efektywnego tworzenia UI i łączenia go z
                API. Poniżej znajdziesz instrukcję i odnośniki.
                Prosimy o przesłanie repozytorium na contact@fcapp.eu do godz. 15:00 21.04. Cenimy
                dynamiczną pracę - termin przesłania również będzie miał znaczenie.
                Powodzenia
                Zespół FC.APP
                Materiały
                Widoki: Figma
                Widoki nie muszą zostać odwzorowane 1:1 - jako zamienniki komponentów mogą zostać
                wykorzystane te z NativeBase v3.4 Design Kit.
                Szkielet aplikacji: GitHub
                Zadanie
                Stwórzy na stornie Home listę z komponentów Button
                Stwórz komponent Button w 3 wersjach: outline, filled, simple
                Przykładowe props:
                - mode
                - onPress
                - text
                - icon
                Po kliknięciu w przycisk “Zarejestruj się emailem”, przejdź do strony rejestracji
                Formularz rejestracyjny wykonaj za pomocą biblioteki use-form-hook
                Stwórz komponent formularza zawierający wszystkie kroki wraz z animacjami przejscia.
                (opcjonalne) zastosuj https://www.npmjs.com/package/react-native-animated-numbers do
                animacji cyfr

                Zastosuj walidację pól po stronie backendu:
                https://api.dev.footballchallengeapp.com/swagger/
                /auth/registration
                W przypadku wystąpienia błędu przejdź na odpowiednią stronę komponentu i pokaż błąd
                poprzez podświetlenie komponentu i wyświetlenie błędu pod spodem pola.
                Forma przygotowania: link do własnego repozytorium GitHub / GitLab lub paczka ZIP
                W razie pytań, pisz śmiało na contact@fcapp.eu.
                Powodzenia!
            </p>

        </div>
    );
}

export default ModalPage;