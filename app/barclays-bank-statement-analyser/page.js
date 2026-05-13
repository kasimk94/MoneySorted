import BankLandingPage from '@/components/BankLandingPage';
import { bankData } from '@/lib/bankData';

const bank = bankData.barclays;

export const metadata = {
  title: bank.metaTitle,
  description: bank.metaDescription,
  alternates: { canonical: `https://www.getmoneysorted.co.uk/${bank.slug}` },
};

export default function Page() {
  return <BankLandingPage bank={bank} />;
}
