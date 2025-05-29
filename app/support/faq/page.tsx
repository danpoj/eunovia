import { Navigator } from '@/components/navigator'
import { Title } from '@/components/title'
import { faqs, supportLinks } from '@/constants'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Suspense } from 'react'

export default function Page() {
  return (
    <>
      <Title
        title="고객센터"
        subTitle="유노비아 고객센터 입니다. 무엇을 도와드릴까요?"
      />

      <Suspense>
        <Navigator links={supportLinks} />
      </Suspense>

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
