import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { faqs } from '@/constants'

export default function Page() {
  return (
    <>
      <Accordion
        type="multiple"
        className="w-full divide-y-0 space-y-2"
      >
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={String(faq.id)}
          >
            <AccordionTrigger>{faq.text}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
