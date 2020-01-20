import React from 'react';
import {Button, ScrollView, Text} from 'react-native';
import {styles} from '../styles/InformationStyles';

class Depression extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Depression',
    title: 'Depression',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={{flex: 1}}>
        <Button title="Go home" onPress={() => navigate('MainScreen')} />
        <Text style={styles.h1}>Info</Text>
        <Text style={styles.h2}>What is Depression?</Text>
        <Text style={styles.p}>
          Everyone experiences sadness at some point in life, however depression
          is more than feeling sad for a day or two. Depression, also known as
          major depressive disorder or clinical depression, is overwhelming
          sadness or despair that lasts more than a few days. Depression affects
          how you feel, think, and which can interfere with your daily
          activities. For example, you may find yourself canceling social
          activities with friends to stay home alone.
        </Text>
        <Text style={styles.p}>
          Depression is one of the most common mental disorders in the United
          States. It’s estimated that 15.7 million adults in the U.S.
          experienced at least one major depressive episode. Depression isn't a
          weakness and you can't simply "snap out" of it. Don't get discouraged,
          you can overcome depression and you don’t have to do it alone.
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          Approximately 27% of Black women reported experiencing depression in
          their lifetime.
        </Text>
        <Text style={styles.h2}>Symptoms</Text>
        <Text style={styles.p}>
          Common signs and symptoms of depression include:
        </Text>
        <Text style={styles.li}>
          Feelings of sadness, tearfulness, emptiness or hopelessness
        </Text>
        <Text style={styles.li}>
          Angry outbursts, irritability or frustration, even over small matters
        </Text>
        <Text style={styles.li}>
          Loss of interest or pleasure in most or all normal activities, such as
          sex, hobbies or sports
        </Text>
        <Text style={styles.li}>
          Sleep disturbances, including insomnia or sleeping too much
        </Text>
        <Text style={styles.li}>
          Tiredness and lack of energy, so even small tasks take extra effort
        </Text>
        <Text style={styles.li}>
          Reduced appetite and weight loss or increased cravings for food and
          weight gain
        </Text>
        <Text style={styles.li}>Anxiety, agitation or restlessness</Text>
        <Text style={styles.li}>
          Slowed thinking, speaking or body movements
        </Text>
        <Text style={styles.li}>
          Feelings of worthlessness or guilt, fixating on past failures or
          self-blame
        </Text>
        <Text style={styles.li}>
          Trouble thinking, concentrating, making decisions and remembering
          things
        </Text>
        <Text style={styles.li}>
          Frequent or recurrent thoughts of death, suicidal thoughts, suicide
          attempts or suicide
        </Text>
        <Text style={styles.li}>
          Unexplained physical problems, such as back pain or headaches
        </Text>
        <Text style={styles.h2}>Causes</Text>
        <Text style={styles.p}>
          A combination of biological, psychological, social and environmental
          factors may be involved in causing someone to have a major depressive
          episode. People who have a family history of depression are at an
          increased risk of depression. Hormonal changes in the body may also be
          involved in causing or triggering depression. Hormone changes can
          occur during pregnancy and during the months after delivery
          (postpartum depression), from thyroid problems, menopause or other
          health conditions. Major life changes, trauma and stress can also
          trigger an episode of depression.
        </Text>
        <Text style={styles.p}>Did you know?</Text>
        <Text style={styles.blockquote}>
          The “Strong Black Woman” stereotype has led to harmful expectations
          that Black women present an image of strength and suppress their
          emotions. Feeling that you have to handle everything on your own and
          cannot show weakness can cause feelings of sadness and hopelessness,
          which increases the likelihood of triggering a major depressive
          episode.
        </Text>
        <Text style={styles.h1}>Overcome Depression</Text>
        <Text style={styles.h2}>Tips</Text>
        <Text style={styles.p}>5 Tips to Help You Manage Depression</Text>
        <Text style={styles.li}>
          1. Connect: Reach out to a trusted family member or friend. You don’t
          have to deal with depression alone. Let someone know what you are
          going through so that they can offer emotional support.
        </Text>
        <Text style={styles.li}>
          2. Exercise: Exercise for at least 30 minutes every day. Regular
          exercise has been shown to reduce stress, and improve mood and sleep.
        </Text>
        <Text style={styles.li}>
          3. Journal: Write down your thoughts before bed to clear your mind.
          Journaling may improve your mood by allowing you to express sadness,
          pain, anger, fear or other emotions.
        </Text>
        <Text style={styles.li}>
          4. Self-care: Make time for self-care. Self-care is any activity that
          you do deliberately in order to take care of your mental, emotional,
          or physical health. It can be as simple as taking a nap, going to a
          yoga class, or reading a good book.
        </Text>
        <Text style={styles.li}>
          5. Pray and Meditate: Prayer and meditation may help to improve
          depression symptoms by calming the mind.
        </Text>
        <Text style={styles.h2}>Treatments</Text>
        <Text style={styles.p}>
          The most effective types of treatment for depression are psychotherapy
          and medication.
        </Text>
        <Text style={styles.italic}>Psychotherapy</Text>
        <Text style={styles.p}>
          Psychotherapy is also known as talk therapy or psychological
          counseling. In psychological counseling you will work with a therapist
          to reduce your depression symptoms. Cognitive behavioral therapy (CBT)
          is an effective form of psychotherapy for depressive disorders. CBT
          specifically targets your thoughts, physical symptoms and behaviors,
          and focuses on teaching you specific skills to improve your symptoms.
        </Text>
        <Text style={styles.italic}>Medications</Text>
        <Text style={styles.p}>
          There are many types of medications that are used to effectively
          relieve symptoms of depression. Antidepressants such as SSRIs, may be
          prescribed to reduce symptoms. Other medications, such as mood
          stabilizers, may be added to an antidepressant to enhance
          antidepressant effects.
        </Text>
        <Text style={styles.italic}>Alternative treatments</Text>
        <Text style={styles.p}>
          Relaxation techniques, meditation, yoga, exercise, and other
          alternative treatments may also be recommended to relieve depression.
        </Text>
      </ScrollView>
    );
  }
}

export default Depression;
