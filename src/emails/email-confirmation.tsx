import * as React from 'react';
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from 'react-email';

import { LogoIcon } from '../assets/logo';

type EmailConfirmationProps = {
  code?: string;
};

export const EmailConfirmation = ({ code = '3456' }: EmailConfirmationProps) => {
  const digits = code.split('').slice(0, 4);

  return (
    <Html>
      <Head />

      <Preview>Код подтверждения электронной почты Planara</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.brand}>
            <Row style={styles.brandRow}>
              <Column style={styles.brandLogoColumn}>
                <LogoIcon color="#ffffff" styles={styles.logo} />
              </Column>

              <Column style={styles.brandNameColumn}>
                <Text style={styles.brandName}>Planara</Text>
              </Column>
            </Row>
          </Section>

          <Container style={styles.messageBody}>
            <Section style={styles.header}>
              <Heading style={styles.title}>Подтвердите почту</Heading>

              <Text style={styles.subtitle}>
                Используйте этот 4-значный код для завершения регистрации.
              </Text>
            </Section>

            <Section style={styles.codeSection}>
              <Text style={styles.codeRow}>
                {digits.map((digit, index) => (
                  <span key={index} style={styles.codeField}>
                    {digit}
                  </span>
                ))}
              </Text>
            </Section>

            <Text style={styles.description}>
              Если вы не запрашивали этот код, просто проигнорируйте письмо.
            </Text>

            <Section style={styles.footer}>
              <Text style={styles.footerText}>© {new Date().getFullYear()} Planara</Text>
              <Text style={styles.footerDescription}>
                Веб-пространство для создания и управления 3D-сценами.
              </Text>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};

const styles: Record<string, React.CSSProperties> = {
  body: {
    margin: '0',
    padding: '40px 16px',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },

  container: {
    width: '100%',
    maxWidth: '520px',
    margin: '0 auto',

    backgroundColor: '#ffffff',
    border: '1px solid #eeeeee',
    borderRadius: '28px',
  },

  messageBody: {
    width: '100%',
    padding: '44px',
  },

  brand: {
    backgroundColor: '#111111',
    width: '100%',
    height: '120px',
    textAlign: 'center',
    borderRadius: '28px',
  },

  brandRow: {
    width: 'auto',
    margin: '0 auto',
  },

  brandLogoColumn: {
    width: '42px',
    verticalAlign: 'middle',
  },

  brandNameColumn: {
    width: 'auto',
    paddingLeft: '10px',
    verticalAlign: 'middle',
  },

  logo: {
    width: '42px',
    height: '42px',
  },

  brandName: {
    margin: '0',
    color: '#ffffff',
    fontSize: '20px',
    fontWeight: '700',
    lineHeight: '42px',
    letterSpacing: '-0.03em',
    textTransform: 'uppercase',
  },

  header: {
    marginBottom: '32px',
  },

  title: {
    margin: '0 0 12px',
    color: '#111111',
    fontSize: '32px',
    fontWeight: '700',
    lineHeight: '1.1',
    letterSpacing: '-0.04em',
  },

  subtitle: {
    margin: '0',
    color: '#666666',
    fontSize: '15px',
    lineHeight: '1.6',
  },

  codeSection: {
    margin: '36px 0',
    textAlign: 'center',
  },

  codeRow: {
    margin: '0',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },

  codeField: {
    display: 'inline-block',

    width: '48px',
    height: '60px',

    margin: '0 4px',

    border: '1px solid #d1d1d1',
    borderRadius: '6px',

    backgroundColor: '#f7f7f7',
    color: '#111111',

    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '60px',

    textAlign: 'center',
    verticalAlign: 'middle',
  },

  description: {
    margin: '0',
    color: '#9b9b9b',
    fontSize: '13px',
    lineHeight: '1.6',
    textAlign: 'center',
  },

  footer: {
    marginTop: '42px',
    paddingTop: '24px',
    borderTop: '1px solid #eeeeee',
  },

  footerText: {
    margin: '0 0 4px',
    color: '#111111',
    fontSize: '12px',
    fontWeight: '700',
    textAlign: 'center',
  },

  footerDescription: {
    margin: '0',
    color: '#9b9b9b',
    fontSize: '12px',
    lineHeight: '1.5',
    textAlign: 'center',
  },
};

export default EmailConfirmation;
