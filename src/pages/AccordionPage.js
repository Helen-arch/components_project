import Accordion from "../components/Accordion";

const AccordionPage = () => {
    const items = [
        {
            id: 'fjhgf',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: 'ety',
            label: 'Can I use Javascript on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
        {
            id: 'vmnbv',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
        },
    ]

    return (
        <Accordion items={items}/>
    )
}

export default AccordionPage;
