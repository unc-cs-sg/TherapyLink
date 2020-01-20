import React, {Fragment} from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {styles} from '../styles/InformationStyles';

class Anxiety extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Anxiety',
    title: 'Anxiety',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Text style={styles.h1}>Info</Text>
        <Text style={styles.h2}>What is Anxiety?</Text>
        <Text style={styles.p}>
          Anxiety is an emotion characterized by feelings of tension, worried
          thoughts and physical changes like increased blood pressure. Most
          people feel anxious at some point in life, for example, right before a
          presentation. However, anxiety that lasts a long period of time, or is
          so overwhelming that it interferes with daily activities may become a
          serious problem.
        </Text>
        <Text style={styles.p}>
          Anxiety disorders are common, they affect 1 in 5 people every year.
          Examples of anxiety disorders include generalized anxiety disorder
          (GAD), panic disorder and panic attacks, social anxiety disorder
          (social phobia), and specific phobias.
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          Approximately 16% of Black women reported having generalized anxiety
          disorder in their lifetime. However, due to underreporting and
          misdiagnosis the true rate may be a lot higher.
        </Text>
        <Text style={styles.h2}>Symptoms</Text>
        <Text style={styles.p}>Common anxiety signs and symptoms include:</Text>
        <Text style={styles.li}>Feeling nervous, restless or tense</Text>
        <Text style={styles.li}>
          Having a sense of impending danger, panic or doom{' '}
        </Text>
        <Text style={styles.li}>Having an increased heart rate </Text>
        <Text style={styles.li}>Breathing rapidly (hyperventilation) </Text>
        <Text style={styles.li}>Sweating</Text>
        <Text style={styles.li}>Trembling</Text>
        <Text style={styles.li}>Feeling weak or tired</Text>
        <Text style={styles.li}>
          Trouble concentrating or thinking about anything other than what you
          are worried about
        </Text>
        <Text style={styles.li}>Having trouble sleeping </Text>
        <Text style={styles.li}>
          Experiencing gastrointestinal (GI) problems{' '}
        </Text>
        <Text style={styles.li}>Having difficulty controlling worry</Text>
        <Text style={styles.li}>
          Having the urge to avoid things that trigger anxiety
        </Text>
        <Text style={styles.h2}>Causes</Text>
        <Text style={styles.p}>
          Although the causes of anxiety disorders aren't completely understood,
          life experiences such as traumatic events appear to trigger anxiety
          disorders in people who are already prone to anxiety. Anxiety may also
          be linked to an underlying health issue. In some cases, anxiety signs
          and symptoms are the first signs of a physical illness (e.g. thyroid
          problems, such as hyperthyroidism).
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          Many of the pressures that Black women experience, such as caregiving
          responsibilities for primary and extended family, financial hardship,
          as well as racism and sexism may cause extreme stress and lead to
          increased anxiety.
        </Text>
        <Text style={styles.h1}>Managing Anxiety</Text>
        <Text style={styles.h2}>Tips</Text>
        <Text style={styles.p}>7 Tips to Help You Manage Anxiety</Text>
        <Text style={styles.li}>
          1. Fact-check your thoughts: Don’t fixate on worst-case scenarios,
          instead think about how realistic your fears are. Getting into the
          habit of challenging your thoughts and rethinking your fears helps
          train your mind to come up with a rational way to deal with your
          anxious thoughts.
        </Text>
        <Text style={styles.li}>
          2. Get good sleep: Aim for at least seven hours of sleep each night.
          Lack of sleep may affect your mood and concentration.
        </Text>
        <Text style={styles.li}>
          3. Exercise: Exercise for at least 30 minutes every day. Regular
          exercise has been shown to reduce stress, and improve mood and sleep.
        </Text>
        <Text style={styles.li}>
          4. Connect: Make time to connect with your friends. Many studies have
          shown that social support improves women’s mental well-being, helping
          to reduce stress.
        </Text>
        <Text style={styles.li}>
          5. Eat well: Healthy meals and snacks help keep your energy levels
          balanced, helping you better manage your daily activities.
        </Text>
        <Text style={styles.li}>
          6. Set boundaries: When possible, decline or delay response to
          requests that create unnecessary stress. Setting boundaries like not
          responding to email after work hours can help reduce stress.
        </Text>
        <Text style={styles.li}>
          7. Pray and Meditate: Prayer and meditation may help to improve
          anxiety symptoms by calming the mind.
        </Text>
        <Text style={styles.h2}>Treatments</Text>
        <Text style={styles.p}>
          The most effective types of treatment for anxiety are psychotherapy
          and medication.
        </Text>
        <Text style={styles.italic}>Psychotherapy</Text>
        <Text style={styles.p}>
          Psychotherapy is also known as talk therapy or psychological
          counseling. In psychological counseling you will work with a therapist
          to reduce your anxiety symptoms. Cognitive behavioral therapy (CBT) is
          the most effective form of psychotherapy for anxiety disorders. CBT
          specifically targets your thoughts, physical symptoms and behaviors,
          and focuses on teaching you specific skills to improve your symptoms.
          Mindfulness based approaches and Acceptance Commitment Therapy have
          also been shown to have positive outcomes.
        </Text>
        <Text style={styles.italic}>Medications</Text>
        <Text style={styles.p}>
          There are many types of medications that are used to effectively
          relieve anxiety symptoms. Antidepressants such as SSRIs, may be
          prescribed to reduce symptoms of anxiety over a longer period of time.
          Benzodiazepines or beta blockers may be prescribed for short-term use
          to relieve anxiety symptoms.
        </Text>
        <Text style={styles.italic}>Alternative Treatments</Text>
        <Text style={styles.p}>
          Relaxation techniques, meditation, yoga, exercise, and other
          alternative treatments may also be recommended to relieve anxiety
          symptoms.
        </Text>
      </ScrollView>
    );
  }
}

export default Anxiety;
