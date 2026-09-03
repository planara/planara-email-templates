import * as React from 'react';
import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from 'react-email';

type EmailConfirmationProps = {
  digits?: [string, string, string, string];
  year?: string;
};

export const EmailConfirmation = ({
  digits = ['3', '4', '5', '6'],
  year = new Date().getFullYear().toString(),
}: EmailConfirmationProps) => {
  return (
    <Html>
      <Head />

      <Preview>Код подтверждения электронной почты Planara</Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.brand}>
            <Row style={styles.brandRow}>
              <Column style={styles.brandLogoColumn}>
                <Img
                  src="https://planara.ru/.well-known/email/logo.png"
                  alt="Planara"
                  width="42"
                  height="42"
                  style={styles.logo}
                />
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
              <Row style={styles.codeRow}>
                {digits.map((digit, index) => (
                  <React.Fragment key={index}>
                    <Column style={styles.codeField}>{digit}</Column>

                    {index < digits.length - 1 && <Column style={styles.codeSpacer}>&nbsp;</Column>}
                  </React.Fragment>
                ))}
              </Row>
            </Section>

            <Text style={styles.description}>
              Если вы не запрашивали этот код, просто проигнорируйте письмо.
            </Text>

            <Section style={styles.footer}>
              <Text style={styles.footerText}>© {year} Planara</Text>

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
    width: '100%',
    height: '120px',
    backgroundColor: '#111111',
    borderRadius: '28px',
    textAlign: 'center',
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
    display: 'block',
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
    width: 'auto',
    margin: '0 auto',
  },

  codeField: {
    width: '48px',
    height: '60px',
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

  codeSpacer: {
    width: '8px',
    fontSize: '1px',
    lineHeight: '1px',
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
